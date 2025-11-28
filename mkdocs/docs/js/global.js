function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    } catch (e) {
        console.error("Invalid JSON in localStorage for:", key);
        return null;
    }
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const pad = n => n.toString().padStart(2, '0');
    // return `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    return `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()}`;
}

function showMark() {
	const checkmark = svg.getElementById("checkmark");
	const t_sign = svg.getElementById("t_sign");
	checkmark.style.display = 'block'; // prikaži kljukico
	t_sign.style.display= 'block';
}

function hideMark() {
	const checkmark = svg.getElementById("checkmark");
	const t_sign = svg.getElementById("t_sign");
	checkmark.style.display = 'none'; // skrij kljukico
	t_sign.style.display= 'none';
}


