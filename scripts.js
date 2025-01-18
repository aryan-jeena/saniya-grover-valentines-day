function yesResponse() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.textContent = "I love you too, Saniya ❤️ You make my world brighter every day!";
    addConfetti();
}

function ughResponse() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.textContent = "I don't care, you're still my Valentine, and I love you! 😘";
    addConfetti();
}

function addConfetti() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(confetti);
    }
}
