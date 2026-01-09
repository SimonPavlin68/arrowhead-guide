# Izračun

Spodaj lahko vneseš začetno hitrost, razdaljo in kot, ter izračunaš kako nastaviti merek.

<div class="form-row">
    <label for="v0">Začetna hitrost (m/s):</label>
    <input id="v0" type="number" value="50" min="30">
</div>

<div class="form-row">
    <label for="distance">Razdalja (m):</label>
    <input id="distance" type="number" value="30" min="1">
</div>

<div class="form-row">
    <label for="angle">Kot (stopinje):</label>
    <input id="angle" type="number" value="0" min="-90" max="90">
</div>

<button id="calcBtn">Izračunaj</button>

<div class="form-row">
    <label for="merek">Merek (m):</label>
    <input id="merek" readonly>
</div>


<script>
document.addEventListener("DOMContentLoaded", function() {
    const v0El = document.getElementById("v0");
    const distanceEl = document.getElementById("distance");
    const angleEl = document.getElementById("angle");
    const merekEl = document.getElementById("merek");
    const btn = document.getElementById("calcBtn");
	console.log("sendCalc")
    async function sendCalc() {
    console.log("sendCalc")
        const payload = {
            v0: parseFloat(v0El.value),
            distance: parseFloat(distanceEl.value),
            angle: parseFloat(angleEl.value)
        };

        try {
            // const response = await fetch("http://localhost:5000/api/merek", {
            const response = await fetch("/api/merek", {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify(payload)
		});

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            merekEl.value = data.merek ?? "Napaka";
        } catch (err) {
            merekEl.value = "Napaka pri pošiljanju";
            console.error(err);
        }
    }

    btn.addEventListener("click", sendCalc);
});
</script>

