# Namesto uvoda

 Arrowhead se odvija po terenu zato se na večino tarč strelja izven horizontale. Pri takem streljanju pa nastane problem, ker zadetki "strižejo" po višini in tudi po smeri. Zato je potrebno upoštevati naklon. Za uspešen strel je potrebno zadostiti naslednjim pogojem:

+ Postavitev lokostrelca mora biti takšna kot je na ravnem -> postavitev T.
+ Puščici moramo dati vedno enako "oporo" pri strelu.
+ Geometrija telesa se ne sme "podreti", ker nas potem fizika pusti na cedilu.


Na kratko: Pri streljanju gor/dol se poskušajmo "prepogniti" v bokih, čim nižje, nikakor ne smemo spreminjati "geometrije" ramenskega obroča! 

<object id="archer-object" type="image/svg+xml" data="../../svg/archer-T.svg"></object>
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
postavitev T – Klikni na sliko za animacijo
</div>
Če je stojišče neravno potem pokrčimo levo ali desno nogo:
<object type="image/svg+xml" data="../../svg/archer-T-up.svg"></object>

<object type="image/svg+xml" data="../../svg/archer-T-down.svg"></object>
