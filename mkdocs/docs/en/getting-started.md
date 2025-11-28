# Instead of an introduction

Arrowhead takes place on terrain, so most targets are shot off-horizontally. However, this type of shooting creates a problem because hits "shear" in height and direction. Therefore, the slope must be taken into account. For a successful shot, the following conditions must be met:

The archer's position must be the same as on the flat -> T-position.
The arrow must always be given the same "support" when shooting.
The body geometry must not be "knocked down", because then physics will let us down.

In short: When shooting up/down, try to "bend" at the hips, as low as possible, and in no case should we change the "geometry" of the shoulder girdle!

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
<div align="center">
T-position – Click on image for animation
</div>
If the standing surface is uneven, bend your left or right leg:
<object type="image/svg+xml" data="../../svg/archer-T-up.svg"></object>

<object type="image/svg+xml" data="../../svg/archer-T-down.svg"></object>