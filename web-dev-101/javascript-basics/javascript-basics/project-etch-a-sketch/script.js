window.onload = () => {
  createGrid();
}

function createGrid() {
  const rows = 4;
  const columns = rows;

  container = document.querySelector('#grid-container');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = '25% 25% 25% 25%';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let squareDiv = document.createElement('div');
      squareDiv.textContent = `row ${i} column ${j}`
      container.appendChild(squareDiv);
    }
  }
}
