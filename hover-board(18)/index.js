const container = document.getElementById('container');
const colors = ['#fc469f', '#398788', '#fdbb2d', '#d44e48', '#89bbbb'];
const SQUARE_NR = 500;

for (let i = 0; i < SQUARE_NR; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColorToEl(square);
  });

  square.addEventListener('mouseout', () => {
    removeColorToElement(square);
  });

  container.appendChild(square);
}

function setColorToEl(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px #000`;
}
function removeColorToEl(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
