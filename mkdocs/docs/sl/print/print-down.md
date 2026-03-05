# Tiskanje

Navzdol

<div id="print-area">

<table>
<tr>
<td>
<object type="image/svg+xml" data="../../../svg/position/archer-T-down.svg"></object>
<br>
<b>T postavitev</b>
</td>

<td>
<object type="image/svg+xml" data="../../../svg/position/archer-Z-down.svg"></object>
<br>
<b>Z postavitev</b>
</td>
</tr>

<tr>
<td>
<object type="image/svg+xml" data="../../../svg/position/archer-T-down-flat.svg"></object>
<br>
<b>T postavitev</b>
</td>

<td>
<object type="image/svg+xml" data="../../../svg/position/archer-Z-down-flat.svg"></object>
<br>
<b>Z postavitev</b>
</td>
</tr>
</table>

</div>

<button onclick="window.print()" class="md-button md-button--primary">
🖨️ Natisni
</button>

<style>
/* Osnovno: centrirano, brez robov */
table, tr, td, th {
  border: none !important;
}

td {
  text-align: center;
}

td object {
  display: block;
  margin: 0 auto;
  max-width: 90%; /* večje slike pri printu */
  height: auto;
}

td b {
  display: block;
  text-align: center;
}

/* Print styling */
@media print {

  body * {
    visibility: hidden;  /* skrije vse */
  }

  #print-area, #print-area * {
    visibility: visible; /* pokaže samo print-area */
  }

  #print-area {
    position: absolute;
    left: 50%;
    top: -20px;  /* premik navzdol po Y-osi */
    transform: translateX(-50%) scale(1.4); /* centriraj + premik + povečava */
    transform-origin: top center; /* iz katere točke se scale izvede */
    width: auto;
  }

  button {
    display: none !important; /* gumb skrijemo */
  }
}
</style>