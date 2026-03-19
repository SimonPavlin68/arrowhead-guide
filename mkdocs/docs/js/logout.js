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
		link.title = "Klikni za odjavo";
		
		  const tooltip = document.createElement("span");
        tooltip.textContent = "Klikni za odjavo";
        tooltip.style.position = "absolute";
        tooltip.style.left = "100%";
        tooltip.style.top = "50%";
        tooltip.style.transform = "translateY(-50%)";
        tooltip.style.background = "#333";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "4px 8px";
        tooltip.style.borderRadius = "4px";
        tooltip.style.fontSize = "0.8rem";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
        tooltip.style.transition = "opacity 0.2s";

        link.appendChild(tooltip);
		
		 link.addEventListener("mouseenter", () => {
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
        });
        link.addEventListener("mouseleave", () => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
        });

        link.onclick = () => {
            localStorage.removeItem("arrowheadUser");
            location.reload();
        };

        item.appendChild(link);
        nav.appendChild(item);
    });
});

