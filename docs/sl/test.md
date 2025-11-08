# Test viziranja
Merek je premakljiv, zagrabi ga z miško in poskusi prekriti tarčo.
V prikazanem primeru pokrije merek točno polovico tarče na razdalji 20m.
<object id="dragdrop-object" type="image/svg+xml" data="../../svg/dragdrop.svg" width="1200" height="800"></object>

<script src="../../js/dragdrop.js"></script>
<script>
  const obj = document.getElementById('dragdrop-object');
  obj.addEventListener('load', function() {
	const svgDoc = obj.contentDocument;
	const svgRoot = svgDoc.documentElement;

	// Inicializiraj drag & drop
	onSVGLoad(svgRoot);
  });
</script>




