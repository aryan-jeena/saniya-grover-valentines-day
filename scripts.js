/*******************************************
 * FRONT COVER -> INSIDE TRANSITION
********************************************/
function openCard() {
    // Hide the front
    document.getElementById('cardFront').style.display = 'none';
    // Show the main card
    const mainCard = document.getElementById('mainCard');
    mainCard.style.display = 'block';
  }
  
  /*******************************************
   * INSIDE CARD SCRIPTS
  ********************************************/
  function yesResponse() {
    const message = document.getElementById('message');
    // Make the love message visible
    message.style.opacity = '1';
    // Single paragraph
    message.innerHTML = `
      Saniya, from the moment I first met you, I knew you were someone special. Not only were you the most stunning girl I’d ever seen, but as I got to know you more, you revealed yourself to be incredibly intelligent and radiantly kind. Staring into your sparkling eyes at the mall on our first date, I wanted to never look away. That moment, that feeling—I still carry it with me every time I see you. The more time I spend with you, the more I realize how lucky I am. Your warm laugh and comforting smile have a way of making even the toughest days feel manageable. Whether we're running around after missing every shot we take playing basketball, laughing at how speedy we are, or just cuddling and enjoying each other's company, every second with you feels like home. I love you Saniya, you are my world. I could not ask for a more perfect person to have in my life.
    `;
  
    // Reveal corner images
    document.querySelectorAll('.corner-img').forEach(img => {
      img.style.display = 'block';
    });
  
    addConfetti();
    disableButtons();
  }
  
  function ughResponse() {
    const ughButton = document.querySelector('.ugh');
    const rect = ughButton.getBoundingClientRect();
    // Keep in screen bounds
    const maxX = window.innerWidth - rect.width - 10;
    const maxY = window.innerHeight - rect.height - 10;
  
    const randLeft = Math.random() * maxX;
    const randTop = Math.random() * maxY;
  
    ughButton.style.position = 'fixed';
    ughButton.style.left = randLeft + 'px';
    ughButton.style.top = randTop + 'px';
  }
  
  /*******************************************
   * CONFETTI
  ********************************************/
  function addConfetti() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      // random horizontal
      confetti.style.left = Math.random() * 100 + 'vw';
      // start near top quarter
      const startY = Math.random() * window.innerHeight * 0.25;
      confetti.style.top = startY + 'px';
      // stagger
      confetti.style.animationDelay = Math.random() * 1.5 + 's';
  
      body.appendChild(confetti);
      setTimeout(() => { confetti.remove(); }, 3000);
    }
  }
  
  /*******************************************
   * DISABLE BUTTONS AFTER “YES”
  ********************************************/
  function disableButtons() {
    document.querySelectorAll('.btn').forEach(button => {
      if (button.classList.contains('ugh')) {
        // Hide "ugh" button
        button.style.display = 'none';
      } else {
        // Disable "yes" button
        button.disabled = true;
        button.style.opacity = '0.5';
      }
    });
  }
  
  /*******************************************
   * ON PAGE LOAD
  ********************************************/
  document.addEventListener('DOMContentLoaded', () => {
    // Hide message initially
    document.getElementById('message').style.opacity = '0';
  });
  