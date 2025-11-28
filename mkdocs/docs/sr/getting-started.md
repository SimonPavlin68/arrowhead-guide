# Уместо увода

Врх стреле се одвија на терену, тако да се већина мета гађа ван хоризонта. Међутим, ова врста гађања ствара проблем јер се погодци „секу“ по висини и правцу. Стога се мора узети у обзир нагиб. За успешан погодак морају бити испуњени следећи услови:

+ Положај стрелца мора бити исти као на равном -> Т-позицији.
+ Стрели се увек мора пружити иста „подршка“ приликом гађања.
+ Геометрија тела не сме бити „оборена“, јер ће нас тада физика изневерити.

Укратко: Приликом гађања горе/доле, покушајте да се „савијете“ у куковима, што је могуће ниже, и ни у ком случају не смемо мењати „геометрију“ раменог појаса! 

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
Т-позицији – Кликните на слику за анимацију
</div>
Ако је површина за стајање неравна, савијте леву или десну ногу:
<object type="image/svg+xml" data="../../svg/archer-T-up.svg"></object>

<object type="image/svg+xml" data="../../svg/archer-T-down.svg"></object>