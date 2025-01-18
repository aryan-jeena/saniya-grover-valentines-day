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
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(confetti);

        // Automatically remove confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ff9a9e', '#fecfef', '#ffcccb', '#ffc107'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.style.display = 'none';
});
