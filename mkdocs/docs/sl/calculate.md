<label>Začetna hitrost v0:</label>
<input id="v0" type="number" value="55">

<label>Razdalja:</label>
<input id="distance" type="number" value="30">

<label>Kot:</label>
<input id="angle" type="number" value="0">

<button onclick="sendCalc()">Izračunaj</button>

<label>Merek:</label>
<input id="merek" readonly>

<script>
async function sendCalc() {
    const payload = {
        v0: parseFloat(document.getElementById("v0").value),
        distance: parseFloat(document.getElementById("distance").value),
        angle: parseFloat(document.getElementById("angle").value)
    };

    const response = await fetch("/api/merek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    document.getElementById("merek").value = data.merek ?? "Napaka";
}
</script>
