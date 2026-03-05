# Tiskanje

Zasuk postavitve:

<div id="print-area" style="display:flex; gap:50px; justify-content:center; text-align:center;">

<div>
<object type="image/svg+xml" data="../../../svg/position/foot-ok.svg" width="200"></object>
<br>
<b>Normalna postavitev</b>
</div>

<div>
<object type="image/svg+xml" data="../../../svg/position/foot-down.svg" width="200"></object>
<br>
<b>Odprta postavitev - streljanje navzdol</b>
</div>

<div>
<object type="image/svg+xml" data="../../../svg/position/foot-up.svg" width="200"></object>
<br>
<b>Zaprta postavitev - streljanje navzgor</b><br>
</div>

</div>

<button onclick="window.print()" class="md-button md-button--primary">
🖨️ Natisni
</button>

<style>
@media print {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;   /* fullscreen višina strani */
    margin: 0;
  }

  body * {
    visibility: hidden;
  }

  #print-area, #print-area * {
    visibility: visible;
  }

  #print-area {
    text-align: center;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* če je preširoko */
  }
  
  button {
    display: none !important;
  }
}
</style>


 
 



