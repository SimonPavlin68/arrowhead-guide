(function() {
    function initHeaderUser() {
        const user = localStorage.getItem("arrowheadUser");
        if (!user) return;

        const tryAddChip = () => {
            const headerInner = document.querySelector(".md-header__inner");
            if (!headerInner) {
                requestAnimationFrame(tryAddChip); // retry naslednji frame
                return;
            }

            if (document.getElementById("userChip")) return;

            const chip = document.createElement("div");
            chip.id = "userChip";

            const spanUser = document.createElement("span");
            spanUser.textContent = user;
            spanUser.style.marginRight = "8px";

            const btnLogout = document.createElement("button");
            btnLogout.textContent = "×";
            btnLogout.style.cursor = "pointer";
            btnLogout.style.background = "none";
            btnLogout.style.border = "none";
            btnLogout.style.color = "white";
            btnLogout.style.fontWeight = "bold";
            btnLogout.onclick = () => {
                localStorage.removeItem("arrowheadUser");
                location.reload();
            };

            chip.appendChild(spanUser);
            chip.appendChild(btnLogout);

            chip.style.background = "rgba(255,255,255,0.15)";
            chip.style.padding = "4px 12px";
            chip.style.borderRadius = "20px";
            chip.style.fontSize = "0.8rem";
            chip.style.color = "white";
            chip.style.fontWeight = "500";
            chip.style.display = "flex";
            chip.style.alignItems = "center";
            chip.style.height = "32px";
            chip.style.marginLeft = "auto";
            chip.style.whiteSpace = "nowrap";

            headerInner.appendChild(chip);
        };

        tryAddChip();
    }

    function showLoginModal() {
        let user = localStorage.getItem("arrowheadUser");
        if (user) {
            initHeaderUser();
            return;
        }

        const overlay = document.createElement("div");
        overlay.style = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.5);display:flex;
            align-items:center;justify-content:center;z-index:9999;
        `;

        const modal = document.createElement("div");
        modal.style = `
            background:white;padding:2rem;border-radius:12px;
            min-width:300px;box-shadow:0 4px 12px rgba(0,0,0,0.3);
            text-align:center;
        `;

        const title = document.createElement("h2");
        title.textContent = "Vpiši svoje ime";
        title.style.marginBottom = "1rem";

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Tvoje ime";
        input.style = "padding:0.5rem 1rem;width:80%;margin-bottom:1rem;border-radius:6px;border:1px solid #ccc;font-size:1rem;";

        const btn = document.createElement("button");
        btn.textContent = "Prijava";
        btn.style = `
            padding:0.5rem 1.5rem;font-size:1rem;border-radius:6px;
            border:none;background:#3f51b5;color:white;cursor:pointer;
        `;

        btn.onclick = () => {
            const value = input.value.trim();
            if (!value) return;
            localStorage.setItem("arrowheadUser", value);

            fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: value })
            });

            document.body.removeChild(overlay);

            initHeaderUser(); // TU dodamo chip
            initFetchPatch();
        };

        modal.appendChild(title);
        modal.appendChild(input);
        modal.appendChild(btn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }

    function initFetchPatch() {
        const origFetch = window.fetch;
        window.fetch = function(url, options = {}) {
            options.headers = options.headers || {};
            const name = localStorage.getItem("arrowheadUser") || "Unknown";
            options.headers["X-User"] = name;
            return origFetch(url, options);
        };
    }

    document.addEventListener("DOMContentLoaded", showLoginModal);
})();

