document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blueBtn').addEventListener('click', bluePrint);
	document.getElementById('redBtn').addEventListener('click', redPrint);
	document.getElementById('yellowBtn').addEventListener('click', yellowPrint);
});

function bluePrint() {
    const objectElement = document.getElementById('blueSVG');
	jeba(objectElement);
}

function redPrint() {
    const objectElement = document.getElementById('redSVG');
	jeba(objectElement);
}

function yellowPrint() {
    const objectElement = document.getElementById('yellowSVG');
	jeba(objectElement);
}

function jeba(objectElement) {
    // var objectElement = document.getElementById('blueSVG');
    
    // Preverimo, ali je SVG naložen (če je vsebina SVG-ja že dostopna)
    if (objectElement && objectElement.contentDocument) {
        var svgDoc = objectElement.contentDocument; // Povezava do vsebine SVG-ja
        var svgElement = svgDoc.documentElement; // Sam SVG element

        // Ustvarimo iframe, da natisnemo samo SVG
        var iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';

        // Dodamo iframe v telo
        document.body.appendChild(iframe);

        // Ko se iframe naloži, prenesemo SVG v iframe
        iframe.onload = function() {
            var iframeDoc = iframe.contentWindow.document;

            // Ustvarimo celoten HTML dokument za iframe
            iframeDoc.open();
            iframeDoc.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <style>
                            @page {
                                size: A4 landscape; /* Nastavi orientacijo na landscape */
                                margin: 0; /* Izpusti robove za @page */
                            }
                            body {
                                margin: 0;
                                padding: 0;
                                display: flex;
                                justify-content: center; /* Centriraj horizontalno */
                                align-items: flex-start; /* Centriraj vertikalno, ampak začetno, da upošteva rob zgoraj */
                                padding-top: 30mm; /* Povečaj rob zgoraj */
                                padding-left: 30mm; /* Povečaj rob levo */
                                padding-right: 10mm; /* Manjši rob desno */
                                padding-bottom: 10mm; /* Manjši rob spodaj */
                                margin-left: 10mm; /* Dodaj majhen premik desno */
                            }
                        </style>
                    </head>
                    <body>
                        <!-- Vstavimo SVG v iframe -->
                        ${svgElement.outerHTML}
                    </body>
                </html>
            `);
            iframeDoc.close();

            // Počakajmo, da se vsebina naloži in nato sprožimo tiskanje
            iframe.contentWindow.print();
        };

        // Počakajmo nekaj časa, da omogočimo izvajanje JavaScripta znotraj SVG
        //setTimeout(function() {
           // Naložimo SVG v iframe
        //   var svgClone = svgElement.cloneNode(true); // Naredimo klon SVG-ja
        //    iframe.contentWindow.document.body.appendChild(svgClone);

            // Počakajmo še trenutek, da se vsebina naloži in nato izvedemo tiskanje
        //    iframe.onload();
        //}, 100);
    } else {
        alert("SVG datoteka ni naložena ali ni dostopna.");
    }
}