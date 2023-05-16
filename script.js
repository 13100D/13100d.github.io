const textElement = document.getElementById('animated-text');
const phrases = ['S', 'Se', 'Seg','Segg','Seggs','Seggs','Seggs','Seggs.','Seggs..','Seggs...','Seggs...','Seggs...'];

let index = 0;
let delay = 250; // Delay in milliseconds between each animation frame

function animateText() {
  textElement.textContent = phrases[index];
  if index/phrases.length=1:
      index=index+5;
  index = (index + 1) % phrases.length;
  setTimeout(animateText, delay);
}

animateText();
