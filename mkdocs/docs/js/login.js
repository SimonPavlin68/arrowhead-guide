(function() {
    const LANGUAGES = {
        // en: { flag: "🇬🇧", name: "English", texts: { title: "Enter your name", placeholder: "Your name", pplaceholder:"Password", button: "Login", error:"Login failed!" } },
        sl: { flag: "🇸🇮", name: "Slovenščina", texts: { title: "Vpiši svoje ime", placeholder: "ime", pplaceholder:"geslo", button: "Prijava", error:"Prijava ni uspela!" } },
        // sr: { flag: "🇷🇸", name: "Српски", texts: { title: "Унесите своје име", placeholder: "Твоје име", pplaceholder:"Лозинка", button: "Пријава", error:"Пријава није успела!" } }
    };

    function setWithExpiry(key, value, hours=24, minutes=60, seconds=60) {
        const now = Date.now();
        const item = { value, expiry: now + hours*minutes*seconds*1000 };
        localStorage.setItem(key, JSON.stringify(item));
    }

    function getWithExpiry(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
        const item = JSON.parse(itemStr);
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }

    function initHeaderUser() {
        const user = getWithExpiry("arrowheadUser");
        const lang = localStorage.getItem("arrowheadLang") || "en";
        if (!user) return;

        const tryAddChip = () => {
            const headerInner = document.querySelector(".md-header__inner");
            if (!headerInner) { requestAnimationFrame(tryAddChip); return; }
            if (document.getElementById("userChip")) return;

            const chip = document.createElement("div");
            chip.id = "userChip";
            chip.style = `
                background:rgba(255,255,255,0.15);padding:4px 12px;border-radius:20px;
                font-size:0.8rem;color:white;font-weight:500;
                display:flex;align-items:center;height:32px;margin-left:auto;white-space:nowrap;
            `;

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
                localStorage.removeItem("arrowheadLang");
                location.reload();
            };

            chip.appendChild(spanUser);
            chip.appendChild(btnLogout);
            headerInner.appendChild(chip);
        };
        tryAddChip();
    }

    function showLoginModal() {
        const user = getWithExpiry("arrowheadUser");
        const savedLang = localStorage.getItem("arrowheadLang") || "sl";
        if (user) { initHeaderUser(); return; }

        // 🌟 overlay je globalen, da se ne izgubi
        window.loginOverlay = document.createElement("div");
        window.loginOverlay.style = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.5);display:flex;
            align-items:center;justify-content:center;z-index:9999;
        `;

        const modal = document.createElement("div");
        modal.style = `
            background:white;padding:2rem;border-radius:12px;
            min-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.3);
            text-align:center;font-family:sans-serif;position:relative;
        `;

        const title = document.createElement("h2");
        title.style.marginBottom = "1rem";

        const errorMsg = document.createElement("div");
        errorMsg.style.color = "red";
        errorMsg.style.marginBottom = "0.5rem";
        errorMsg.style.minHeight = "1.2em";

        const input = document.createElement("input");
        input.style = "padding:0.5rem 1rem;border-radius:6px;border:1px solid #ccc;font-size:1rem;width:80%;margin-bottom:1rem;";
        input.placeholder = "Your name";

        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.style = "padding:0.5rem 1rem;border-radius:6px;border:1px solid #ccc;font-size:1rem;width:80%;margin-bottom:1rem;";
        passwordInput.placeholder = "Password";

        const langSelect = document.createElement("select");
        langSelect.style = "padding:0.3rem 0.5rem;border-radius:6px;border:1px solid #ccc;font-size:0.9rem;width:40%;margin-bottom:1rem;";
        Object.entries(LANGUAGES).forEach(([code, {flag, name}]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = `${flag} ${name}`;
            langSelect.appendChild(option);
        });
        langSelect.value = savedLang;

        const btn = document.createElement("button");
        btn.type = "button"; // prepreči submit
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
            passwordInput.placeholder = texts.pplaceholder;
            btn.textContent = texts.button;
        };
        langSelect.addEventListener("change", updateTexts);
        updateTexts();

        btn.onclick = async () => {
            const value = input.value.trim();
            const pwd = passwordInput.value.trim();
            const lang = langSelect.value;
            if (!value) return;

            localStorage.setItem("arrowheadLang", lang);
            if (window.setLanguageFromModal) window.setLanguageFromModal(lang);

            try {
                // const res = await fetch("/api/login", {
                const res = await fetch("http://localhost:5000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username: value, pwd: pwd, lang: lang })
                });
                if (!res.ok) throw new Error("Login failed: " + res.status);
                const data = await res.json();
                setWithExpiry("arrowheadUser", value, 24, 60);
                errorMsg.textContent = "";
                document.body.removeChild(window.loginOverlay); // overlay odstrani ob uspehu
                initHeaderUser();
            } catch (err) {
                console.log("Login napaka:", err);
                setWithExpiry("arrowheadUser", value, 1, 1, 1);
                errorMsg.textContent = LANGUAGES[lang].texts.error;
				showLoginErrorModal("ejebi ga");
            }
        };

        // Dodamo elemente
        modal.appendChild(title);
        modal.appendChild(errorMsg);
        modal.appendChild(input);
        modal.appendChild(passwordInput);
        modal.appendChild(langSelect);
        modal.appendChild(btn);

        window.loginOverlay.appendChild(modal);
        document.body.appendChild(window.loginOverlay);
    }
	
	function showLoginErrorModal(message) {
		// Če je že error modal, ga najprej odstranimo
		const existing = document.getElementById("loginErrorModal");
		if (existing) existing.remove();

		const errorModal = document.createElement("div");
		errorModal.id = "loginErrorModal";
		errorModal.style = `
			position:fixed;top:50%;left:50%;
			transform:translate(-50%, -50%);
			background:white;padding:1.5rem 2rem;border-radius:8px;
			box-shadow:0 4px 12px rgba(0,0,0,0.3);
			z-index:10000;min-width:280px;text-align:center;
			font-family:sans-serif;
		`;

		const text = document.createElement("div");
		text.textContent = message;
		text.style.color = "red";
		text.style.marginBottom = "1rem";

		const btn = document.createElement("button");
		btn.textContent = "OK";
		btn.style = `
			padding:0.5rem 1.2rem;font-size:1rem;border-radius:6px;
			border:none;background:#3f51b5;color:white;cursor:pointer;
		`;
		btn.onclick = () => errorModal.remove();

		errorModal.appendChild(text);
		errorModal.appendChild(btn);

		document.body.appendChild(errorModal);
	}

    document.addEventListener("DOMContentLoaded", showLoginModal);
})();