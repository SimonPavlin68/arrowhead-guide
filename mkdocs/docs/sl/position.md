# T-postavitev

Pri streljanju navzgor in navzdol pazimo da se prepognemo v bokih.

Če je stojišče neravno in streljamo navzgor potem pokrčimo nogo bližje tarči:
<object type="image/svg+xml" data="../../svg/archer-T-up-animate.svg"></object>

Če je stojišče neravno in streljamo navzdol potem pokrčimo nogo ki je dlje od tarče, pri ekstremnih naklonih lahko celo z eno nogo pokleknemo:
<object type="image/svg+xml" data="../../svg/archer-T-down-animate.svg"></object>

Zgornji del telesa naj bo vedno v obliki črke T. Pri streljanju navzdol pazimo, da nas spodnji krak ne udari v nogo:

<object id="archer-object" type="image/svg+xml" data="../../svg/archer-T-animate.svg"></object>
<script src="../../js/dragdrop.js"></script>
<script>
  const obj = document.getElementById('archer-object');
  obj.addEventListener('load', function() {
	const svgDoc = obj.contentDocument;
	const svgRoot = svgDoc.documentElement;
	svgRoot.style.cursor = "pointer";
	// Inicializiraj click
	onSVGLoadClick(svgRoot);
  });
</script>

pravilna T-postavitev

<object id="archer-object" type="image/svg+xml" data="../../svg/archer-Z-animate.svg"></object>

nepravilna postavitev




