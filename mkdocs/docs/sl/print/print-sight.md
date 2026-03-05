# Tiskanje

Viziranje:

<div id="print-area" style="justify-content:center; text-align:center;">

<div>
<object type="image/svg+xml" data="../../../svg/estimation/sight-circle-target.svg" style="width:300px"></object>
<br>
<b>Viziranje</b>
</div>

</div>

<button onclick="window.print()" class="md-button md-button--primary">
🖨️ Natisni
</button>

<style>
@media print {

  @page {
    size: A4 portrait;
    margin: 5mm;
  }

  body * {
    visibility: hidden;
  }

  #print-area, #print-area * {
    visibility: visible;
  }

  #print-area {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
  }

  #print-area object {
    width: 100%;
    height: 90vh;   /* tukaj povečaš SVG */
  }

  button {
    display: none !important;
  }

}
</style>


 
 



