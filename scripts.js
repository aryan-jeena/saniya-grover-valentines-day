function yesResponse() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.textContent = "I love you too, Saniya ❤️ You make my world brighter every day!";
    addConfetti();
    disableButtons();
    showSpecialMessage();
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
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ff9a9e', '#fecfef', '#ffcccb', '#ffc107'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.5';
    });
}

function showSpecialMessage() {
    const specialMessage = document.createElement('p');
    specialMessage.textContent = "Saniya, you're the love of my life. I'm so grateful to have you as my girlfriend. ❤️";
    specialMessage.style.fontFamily = "'Dancing Script', cursive";
    specialMessage.style.fontSize = '1.5em';
    specialMessage.style.color = '#ff1493';
    specialMessage.style.marginTop = '20px';
    specialMessage.style.opacity = '0';
    specialMessage.style.transition = 'opacity 1s ease-in-out';

    const card = document.querySelector('.card');
    card.appendChild(specialMessage);

    setTimeout(() => {
        specialMessage.style.opacity = '1';
    }, 100);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.style.display = 'none';

    setInterval(createFloatingHeart, 300);
});
