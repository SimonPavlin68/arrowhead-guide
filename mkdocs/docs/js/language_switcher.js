document.addEventListener("DOMContentLoaded", function() {
    const langLinks = document.querySelectorAll(".md-select__link");
    const btn = document.querySelector(".md-select > button.md-icon");

    function updateButtonEmoji(href) {
        if (href.includes("/en")) btn.setAttribute("data-emoji", "🇬🇧");
        else if (href.includes("/sl")) btn.setAttribute("data-emoji", "🇸🇮");
        else if (href.includes("/sr")) btn.setAttribute("data-emoji", "🇷🇸");
        else btn.setAttribute("data-emoji", "🌐");
        btn.style.setProperty('--emoji', `"${btn.getAttribute("data-emoji")}"`);
    }

    updateButtonEmoji(window.location.pathname);

    langLinks.forEach(link => {
        link.addEventListener("click", function() {
            updateButtonEmoji(this.getAttribute("href"));
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
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