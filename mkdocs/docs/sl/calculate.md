# Izračun merek

Spodaj lahko vneseš začetno hitrost, razdaljo in kot, ter izračunaš Merek.

<label for="v0">Začetna hitrost v0:</label>
<input id="v0" type="number" value="55">

<label for="distance">Razdalja:</label>
<input id="distance" type="number" value="30">

<label for="angle">Kot:</label>
<input id="angle" type="number" value="0">

<button id="calcBtn">Izračunaj</button>

<label for="merek">Merek:</label>
<input id="merek" readonly>

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

