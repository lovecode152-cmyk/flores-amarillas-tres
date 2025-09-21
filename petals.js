// petals.js
// Animación de pétalos flotando
const colors = ['#f9fd25', '#f7b42c', '#fff700', '#ffe066', '#fffbe0'];
function randomBetween(a, b) { return a + Math.random() * (b - a); }

function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = randomBetween(0, 100) + 'vw';
  petal.style.animationDuration = randomBetween(6, 14) + 's';
  petal.style.opacity = randomBetween(0.7, 1);
  petal.style.transform = `scale(${randomBetween(0.7, 1.2)}) rotate(${randomBetween(-30, 30)}deg)`;
  petal.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 15000);
}

setInterval(createPetal, 600);
for(let i=0;i<12;i++) createPetal();
