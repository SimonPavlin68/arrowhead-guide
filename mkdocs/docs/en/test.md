# Aiming test
The crosshair is movable, grab it with the mouse and try to cover the target.
In the example shown, the crosshair covers exactly half of the target at a distance of 20m.
<object id="dragdrop-object" type="image/svg+xml" data="../../svg/dragdrop_en.svg" width="1200" height="800"></object>

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




