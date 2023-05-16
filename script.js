const textElement = document.getElementById('animated-text');
const phrases = ['Hello', 'Welcome', 'Text Animation'];

let index = 0;
let delay = 2000; // Delay in milliseconds between each animation frame

function animateText() {
  textElement.textContent = phrases[index];
  index = (index + 1) % phrases.length;
  setTimeout(animateText, delay);
}

animateText();
