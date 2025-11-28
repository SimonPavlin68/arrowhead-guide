# Пошаљите своје мишљење

<div id="feedback-container" style="max-width:600px;margin:1rem auto;padding:1rem;border:1px solid #ccc;border-radius:8px;">
    <textarea id="feedback-input" placeholder="Напишите своје мишљење..." rows="4" style="width:100%;padding:0.5rem;border-radius:6px;border:1px solid #ccc;margin-bottom:0.5rem;"></textarea>
    <button id="feedback-submit" style="padding:0.5rem 1rem;border:none;border-radius:6px;background:#3f51b5;color:white;cursor:pointer;">Пошаљи</button>

    <h3 style="margin-top:1rem;">Постојећа мишљења:</h3>
    <ul id="feedback-list" style="list-style:none;padding:0;"></ul>
</div>

<script>
const feedbackInput = document.getElementById('feedback-input');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackList = document.getElementById('feedback-list');

function loadFeedback() {
    // MOCK fetch: vrne fiksne podatke
    const mockResponse = [
        { lang: "sl", user: "Simon", timestamp: "2025-11-27T20:03:30", message: "Jeba od zgoraj" },
        { lang: "sl", user: "Simon", timestamp: "2025-11-27T20:01:29", message: "Bum tresk" },
        { lang: "en", user: "Alice", timestamp: "2025-11-27T19:55:12", message: "Great job!" }
    ];

    // Simulacija asinkronega fetch
    new Promise((resolve) => {
        setTimeout(() => resolve({ ok: true, json: async () => mockResponse }), 200);
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Napaka pri GET`);
        }
        return res.json();
    })
    .then(data => {
        // ustvarimo tabelo
        feedbackList.innerHTML = ''; // počisti seznam
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';

        data.forEach((f, i) => {
            const tr = document.createElement('tr');
            tr.style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#ffffff';
            tr.innerHTML = `
                <td style="padding:0.5rem; border:1px solid #ddd">${f.user}</td>
                <td style="padding:0.5rem; border:1px solid #ddd">${f.lang}</td>
                <td style="padding:0.5rem; border:1px solid #ddd">${new Date(f.timestamp).toLocaleString()}</td>
                <td style="padding:0.5rem; border:1px solid #ddd">${f.message}</td>
            `;
            table.appendChild(tr);
        });

        feedbackList.appendChild(table);
    })
    .catch(err => {
        feedbackList.innerHTML = `<p style="color:red;">Ne morem naložiti mnenj: ${err.message}</p>`;
        console.error('Napaka pri GET feedback:', err);
    });
}




// Pošlji novo mnenje
feedbackSubmit.addEventListener('click', () => {
    const message = feedbackInput.value.trim();
    if (!message) return;

    // preberi uporabnika iz localStorage
    const user = getWithExpiry("arrowheadUser") || "Unknown";
    // const lang = localStorage.getItem("arrowheadLang") || "en";
    lang = "sr";

    fetch('/api/feedback', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message, user, lang })
    })
    .then(res => res.json())
    .then(data => {
        feedbackInput.value = '';
        loadFeedback(); // osveži seznam
    })
    .catch(err => console.error(err));
});


// naloži obstoječa mnenja ob zagonu
loadFeedback();
</script>
