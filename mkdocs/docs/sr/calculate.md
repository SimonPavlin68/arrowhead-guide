# Израчунавање

<style>
/* Vrstice obrazca – horizontalna postavitev */
.form-row {
    display: flex;
    align-items: center;
    gap: 12px;               /* razmak med label in input */
    margin-bottom: 10px;
}

/* Label širina – da so lepo poravnani */
.form-row label {
    width: 200px;            /* lahko spremeniš */
    font-weight: 500;
}

/* Splošni stil vhodnih polj */
input[type="number"], input[readonly] {
    padding: 8px;
    width: 200px;
    border: 1px solid #888;
    border-radius: 4px;
    font-size: 14px;
}

/* Stil gumba */
#calcBtn {
    padding: 10px 16px;
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 10px;
}

#calcBtn:hover {
    background-color: var(--md-primary-fg-color--dark);
}
</style>

Испод можете унети почетну брзину, удаљеност и угао, и израчунати како поставити циљ.

<div class="form-row">
    <label for="v0">Почетна брзина (м/с):</label>
    <input id="v0" type="number" value="55">
</div>

<div class="form-row">
    <label for="distance">Удаљеност (м):</label>
    <input id="distance" type="number" value="30">
</div>

<div class="form-row">
    <label for="angle">Угао (степени):</label>
    <input id="angle" type="number" value="0">
</div>

<button id="calcBtn">Израчунај</button>

<div class="form-row">
    <label for="merek">Нишан (м):</label>
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
            merekEl.value = data.merek ?? "Грешка";
        } catch (err) {
            merekEl.value = "Грешка при слању";
            console.error(err);
        }
    }

    btn.addEventListener("click", sendCalc);
});
</script>

