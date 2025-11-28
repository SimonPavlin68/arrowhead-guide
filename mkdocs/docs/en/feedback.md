# Send your opinion

<div id="feedback-container" style="max-width:600px;margin:1rem auto;padding:1rem;border:1px solid #ccc;border-radius:8px;">
    <textarea id="feedback-input" placeholder="Write your opinion..." rows="4" style="width:100%;padding:0.5rem;border-radius:6px;border:1px solid #ccc;margin-bottom:0.5rem;"></textarea>
    <button id="feedback-submit" style="padding:0.5rem 1rem;border:none;border-radius:6px;background:#3f51b5;color:white;cursor:pointer;">Send</button>

    <h3 style="margin-top:1rem;">Existing opinions:</h3>
    <div id="feedback-list"></div>
</div>

<script>
const feedbackInput = document.getElementById('feedback-input');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackList = document.getElementById('feedback-list');


function loadFeedback() {
    // -- MOCK za referenco (zakomentirano) --
    /*
    const mockResponse = [
        { lang: "sl", user: "Simon", timestamp: "2025-11-27T20:03:30", message: "Jeba od zgoraj eeeeeeeeeeeeee" },
        { lang: "sl", user: "Simon", timestamp: "2025-11-27T20:01:29", message: "Bum tresk" },
        { lang: "en", user: "Alice", timestamp: "2025-11-27T19:55:12", message: "Great job!" }
    ];
    */

    // Simulacija asinkronega fetch
    // new Promise((resolve) => {
    //    setTimeout(() => resolve({ ok: true, json: async () => mockResponse }), 200);
    // })
    // -- PRAVI API klic --
    fetch('/api/feedback')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Napaka pri GET: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        feedbackList.innerHTML = '';

        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';

        // HEADER
        const thead = document.createElement('thead');
        thead.innerHTML = `
<tr style="background-color:#303fa1; color:white;">
    <th style="padding:0.5rem; border:1px solid #ddd">User</th>
    <th style="padding:0.5rem; border:1px solid #ddd">Language</th>
    <th style="padding:0.5rem; border:1px solid #ddd">Date</th>
    <th style="padding:0.5rem; border:1px solid #ddd">Message</th>
</tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        data.forEach((f, i) => {
            const tr = document.createElement('tr');
            tr.style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#ffffff';
            tr.innerHTML = `
<td style="padding:0.5rem; border:1px solid #ddd">${f.user}</td>
<td style="padding:0.5rem; border:1px solid #ddd">${f.lang}</td>
<td style="padding:0.5rem; border:1px solid #ddd">${formatDate(f.timestamp)}</td>
<td style="padding:0.5rem; border:1px solid #ddd">${f.message}</td>
            `;
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        feedbackList.appendChild(table);
    })
    .catch(err => {
        feedbackList.innerHTML = `<p style="color:red;">Cannot load feedback: ${err.message}</p>`;
        console.error('Error loading feedback:', err);
    });
}





// Pošlji novo mnenje
feedbackSubmit.addEventListener('click', () => {
    const message = feedbackInput.value.trim();
    if (!message) return;

    // preberi uporabnika iz localStorage
    const user = getWithExpiry("arrowheadUser") || "Unknown";
    // const lang = localStorage.getItem("arrowheadLang") || "en";
    lang = "en";

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
