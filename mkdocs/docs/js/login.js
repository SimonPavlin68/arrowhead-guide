(function() {
    const LANGUAGES = {
        en: { flag: "🇬🇧", texts: { title: "Enter your name", placeholder: "Your name", button: "Login" } },
        sl: { flag: "🇸🇮", texts: { title: "Vpiši svoje ime", placeholder: "Tvoje ime", button: "Prijava" } },
        sr: { flag: "🇷🇸", texts: { title: "Унесите своје име", placeholder: "Твоје име", button: "Пријава" } }
    };

    function initHeaderUser() {
        const user = localStorage.getItem("arrowheadUser");
        const lang = localStorage.getItem("arrowheadLang") || "en";
        if (!user) return;

        const tryAddChip = () => {
            const headerInner = document.querySelector(".md-header__inner");
            if (!headerInner) {
                requestAnimationFrame(tryAddChip);
                return;
            }

            if (document.getElementById("userChip")) return;

            const chip = document.createElement("div");
            chip.id = "userChip";

            const spanUser = document.createElement("span");
            // spanUser.textContent = `${user} ${LANGUAGES[lang].flag}`;
			spanUser.textContent = `${user}`;
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
                localStorage.removeItem("arrowheadLang");
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
        const savedLang = localStorage.getItem("arrowheadLang") || "sl";
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
            min-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.3);
            text-align:center;font-family:sans-serif;
        `;

        const title = document.createElement("h2");
        title.style.marginBottom = "1rem";

        // Input za ime
        const input = document.createElement("input");
        input.style = "padding:0.5rem 1rem;border-radius:6px;border:1px solid #ccc;font-size:1rem;width:80%;margin-bottom:1rem;";

        // Dropdown za jezik
        const langSelect = document.createElement("select");
        langSelect.style = "padding:0.3rem 0.5rem;border-radius:6px;border:1px solid #ccc;font-size:0.9rem;width:30%;margin-bottom:1rem;";

        Object.entries(LANGUAGES).forEach(([code, {flag}]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = `${flag} ${code.toUpperCase()}`;
            langSelect.appendChild(option);
        });
        langSelect.value = savedLang;

        // Gumb v novi vrstici
        const btn = document.createElement("button");
        btn.style = `
            padding:0.5rem 1.5rem;font-size:1rem;border-radius:6px;
            border:none;background:#3f51b5;color:white;cursor:pointer;
            display:block;margin:0 auto;
        `;

        const updateTexts = () => {
            const lang = langSelect.value;
            const texts = LANGUAGES[lang].texts;
            title.textContent = texts.title;
            input.placeholder = texts.placeholder;
            btn.textContent = texts.button;
        };

        langSelect.addEventListener("change", updateTexts);
        updateTexts(); // initial

        btn.onclick = () => {
            const value = input.value.trim();
            const lang = langSelect.value;
            if (!value) return;

            localStorage.setItem("arrowheadUser", value);
            localStorage.setItem("arrowheadLang", lang);

            fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: value, lang })
            });

            document.body.removeChild(overlay);

            initHeaderUser();
            initFetchPatch();
        };

        // Dodamo vse elemente po vrsticah
        modal.appendChild(title);
        modal.appendChild(input);
        modal.appendChild(langSelect);
        modal.appendChild(btn);

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }

    function initFetchPatch() {
        const origFetch = window.fetch;
        window.fetch = function(url, options = {}) {
            options.headers = options.headers || {};
            const name = localStorage.getItem("arrowheadUser") || "Unknown";
            const lang = localStorage.getItem("arrowheadLang") || "en";
            options.headers["X-User"] = name;
            options.headers["X-Lang"] = lang;
            return origFetch(url, options);
        };
    }

    document.addEventListener("DOMContentLoaded", showLoginModal);
})();
