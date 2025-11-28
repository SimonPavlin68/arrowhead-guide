let DragTarget = null;
let offsetX = 0;
let offsetY = 0;

function onSVGLoad(svgRoot) {
    const dragme = svgRoot.getElementById('dragme');

    dragme.addEventListener('mousedown', evt => {
        DragTarget = dragme;

        // Preberi trenutni translate
        const transform = DragTarget.getAttribute('transform'); // npr. "translate(400,100)"
        const match = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)\)/.exec(transform);
        const currentX = match ? parseFloat(match[1]) : 0;
        const currentY = match ? parseFloat(match[2]) : 0;

        offsetX = evt.clientX - currentX;
        offsetY = evt.clientY - currentY;
    });

    svgRoot.addEventListener('mousemove', evt => {
        if (!DragTarget) return;
        const newX = evt.clientX - offsetX;
        const newY = evt.clientY - offsetY;
        DragTarget.setAttribute('transform', `translate(${newX},${newY})`);
    });

    svgRoot.addEventListener('mouseup', () => { DragTarget = null; });
    svgRoot.addEventListener('mouseleave', () => { DragTarget = null; });
}

function onSVGLoadClick(svgRoot) {
    // najdemo animacijo
    const anim = svgRoot.getElementById("animRot");
    if (!anim) {
        console.warn("animRot not found inside SVG");
        return;
    }

    // klik na SVG za start animacije
    svgRoot.addEventListener("click", () => {
        anim.beginElement();
    });
}
