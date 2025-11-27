document.addEventListener("DOMContentLoaded", function () {

    const langLinks = document.querySelectorAll(".md-select__link");
    const btn = document.querySelector(".md-select > button.md-icon");

    function updateButtonEmoji(path) {
        let emoji = "🌐";

        if (path.includes("/en")) emoji = "🇬🇧";
        else if (path.includes("/sl")) emoji = "🇸🇮";
        else if (path.includes("/sr")) emoji = "🇷🇸";

        btn.setAttribute("data-emoji", emoji);
        btn.style.setProperty("--emoji", `"${emoji}"`);
    }
	
	
	window.setLanguageFromModal = function(langCode) {
		updateButtonEmoji("/" + langCode + "/");
		 if (langCode.startsWith("sl")) {
            window.location.href = "/sl/getting-started";
        } else if (langCode.startsWith("sr")) {
            window.location.href = "/sr/getting-started";
        } else {
            window.location.href = "/en/getting-started";
        }
	};


    // inicializacija
    updateButtonEmoji(window.location.pathname);

    langLinks.forEach(link => {
        link.addEventListener("click", function () {
            updateButtonEmoji(this.getAttribute("href"));
        });
    });

    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
    ) {
        const lang = navigator.language || navigator.userLanguage;

        if (lang.startsWith("sl")) {
            window.location.href = "/sl/";
        } else if (lang.startsWith("sr")) {
            window.location.href = "/sr/";
        } else {
            window.location.href = "/en/";
        }
    }
});
