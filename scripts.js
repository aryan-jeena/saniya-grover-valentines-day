function yesResponse() {
    const message = document.getElementById('message');
    message.style.opacity = '1';
    message.innerHTML = "I love you too, Saniya ❤️ You make my world brighter every day!<br><br>Saniya, you're the love of my life. I'm so grateful to have you as my girlfriend. ❤️";
    
    addConfetti();
    disableButtons();
}

function ughResponse() {
    const ughButton = document.querySelector('.ugh');
    const rect = ughButton.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;
    
    ughButton.style.position = 'fixed';
    ughButton.style.left = Math.random() * maxX + 'px';
    ughButton.style.top = Math.random() * maxY + 'px';
}

function addConfetti() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ff9a9e', '#fecfef', '#ffcccb', '#ffc107'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.classList.contains('ugh')) {
            button.style.display = 'none';
        } else {
            button.disabled = true;
            button.style.opacity = '0.5';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.style.opacity = '0';
});
