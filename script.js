const textElement = document.getElementById('animated-text');
const phrases = ['S', 'Se', 'Seg','Segg','Seggs','Seggs','Seggs','Seggs.','Seggs..','Seggs...','Seggs...','Seggs...'];

let index = 0;
let delay = 250; // Delay in milliseconds between each animation frame
let i=1;
function animateText() {
  textElement.textContent = phrases[index];
  if (index==phrases.length-1){
      i=5;
  }
  index = (index + i) % phrases.length;
  setTimeout(animateText, delay);
  
}

animateText();
