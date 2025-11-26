document.addEventListener("DOMContentLoaded", () => {
    // poišči primarni navigation container
    const navContainers = document.querySelectorAll(".md-nav--primary, .md-nav");
    if (!navContainers.length) return;

    navContainers.forEach(nav => {
        // prepreči podvajanje
        if (nav.querySelector("#logoutItem")) return;

        const item = document.createElement("li");
        item.id = "logoutItem";
        item.className = "md-nav__item";

        const link = document.createElement("button");
        link.textContent = "Odjava";
        link.className = "md-nav__link";
        link.style.cursor = "pointer";
        link.style.background = "none";
        link.style.border = "none";
        link.style.width = "100%";
        link.style.textAlign = "left";
        link.style.padding = "0.7rem 1.2rem";
        link.style.fontSize = "0.95rem";

        link.onclick = () => {
            localStorage.removeItem("arrowheadUser");
            location.reload();
        };

        item.appendChild(link);
        nav.appendChild(item);
    });
});

