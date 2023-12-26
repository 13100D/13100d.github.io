const textElement = document.getElementById('animated-text');
const frames = ['S', 'Se', 'Seg','Segg','Seggs','Seggs','Seggs','Seggs.','Seggs..','Seggs...','Seggs...','Seggs...'];

let index = 0;
let delay = 66; // Delay in milliseconds = 1000/15 to give 15 fps
let i=1;
function animateText() {
  textElement.textContent = frames[index];
  index = (index + i) % phrases.length;
  setTimeout(animateText, delay);
  
}

animateText();
