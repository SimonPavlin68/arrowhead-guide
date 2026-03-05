# Tiskanje
Tabele za trening znanih razdalj:

<figure class="figure-center">
  <object id="redSVG" type="image/svg+xml" data="../../../svg/print/arrowhead-red-table-random.svg" class="print-svg"></object>
  <figcaption><button id="redBtn">Natisni</button></figcaption>
</figure>

<figure class="figure-center">
  <object id="blueSVG" type="image/svg+xml" data="../../../svg/print/arrowhead-blue-table-random.svg" class="print-svg"></object>
  <figcaption><button id="blueBtn">Natisni</button></figcaption>
</figure>

<figure class="figure-center">
  <object id="yellowSVG" type="image/svg+xml" data="../../../svg/print/arrowhead-yellow-table-random.svg" class="print-svg"></object>
  <figcaption><button id="yellowBtn">Natisni</button></figcaption>
</figure>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        {btnId: 'redBtn', objId: 'redSVG'},
        {btnId: 'blueBtn', objId: 'blueSVG'},
        {btnId: 'yellowBtn', objId: 'yellowSVG'}
    ];

    buttons.forEach(({btnId, objId}) => {
        const btn = document.getElementById(btnId);
        const obj = document.getElementById(objId);

        if (btn && obj) {
            btn.addEventListener('click', function() {

                if (obj.contentDocument) {
                    const svgDoc = obj.contentDocument;
                    const svg = svgDoc.querySelector("svg");

                    if (svg) {
                        const oldTransform = svg.getAttribute("transform");

                        // začasno premakni SVG desno
                        svg.setAttribute("transform","translate(150,100)");

                        svgDoc.defaultView.print();

                        // vrni nazaj
                        if (oldTransform)
                            svg.setAttribute("transform", oldTransform);
                        else
                            svg.removeAttribute("transform");
                    }

                } else {
                    obj.focus();
                }

            });
        }
    });
});
</script>


 
 



