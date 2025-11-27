# Pošlji svoje mnenje

<div id="feedback-container" style="max-width:600px;margin:1rem auto;padding:1rem;border:1px solid #ccc;border-radius:8px;">
    <textarea id="feedback-input" placeholder="Napiši svoje mnenje..." rows="4" style="width:100%;padding:0.5rem;border-radius:6px;border:1px solid #ccc;margin-bottom:0.5rem;"></textarea>
    <button id="feedback-submit" style="padding:0.5rem 1rem;border:none;border-radius:6px;background:#3f51b5;color:white;cursor:pointer;">Pošlji</button>

    <h3 style="margin-top:1rem;">Obstoječa mnenja:</h3>
    <ul id="feedback-list" style="list-style:none;padding:0;"></ul>
</div>

<script>
const feedbackInput = document.getElementById('feedback-input');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackList = document.getElementById('feedback-list');

// Funkcija za osvežitev seznama mnenj
function loadFeedback() {
    fetch('http://127.0.0.1:5000/api/feedback')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Napaka pri GET: ${res.status} ${res.statusText}`);
            }
            return res.json(); // če ni veljaven JSON, skoči v catch
        })
        .then(data => {
            feedbackList.innerHTML = '';
            data.forEach(f => {
                const li = document.createElement('li');
                li.style.borderBottom = '1px solid #eee';
                li.style.padding = '0.5rem 0';
                const date = new Date(f.timestamp).toLocaleString();
                li.textContent = `[${f.lang}] ${f.user} (${date}): ${f.message}`;
                feedbackList.appendChild(li);
            });
        })
        .catch(err => {
            feedbackList.innerHTML = `<li style="color:red;">Ne morem naložiti mnenj: ${err.message}</li>`;
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
    lang = "sl";

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
