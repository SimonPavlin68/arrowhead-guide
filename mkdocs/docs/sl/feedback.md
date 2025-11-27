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
    fetch('/api/feedback')
        .then(res => res.json())
        .then(data => {
            feedbackList.innerHTML = '';
            data.forEach(f => {
                const li = document.createElement('li');
                li.style.borderBottom = '1px solid #eee';
                li.style.padding = '0.5rem 0';
                li.textContent = f.message; // predvidevamo da je objekt {message: "..." }
                feedbackList.appendChild(li);
            });
        })
        .catch(err => console.error(err));
}

// Pošlji novo mnenje
feedbackSubmit.addEventListener('click', () => {
    const message = feedbackInput.value.trim();
    if(!message) return;

    fetch('/api/feedback', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message})
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
