window.onload = () => {
  document.querySelector('#clear-button').addEventListener('click', () => {
    const input = prompt('How many rows and columns would you like? (1-100)');
    let rows = Number.parseInt(input);
    if (Number.isNaN(rows)
      || rows <= 0
      || rows > 100) {
      console.log('Using default of 16 rows.');
      rows = 16;
    }

    createGrid(rows);
  });

  createGrid(16);
}

function createGrid(rows) {
  const gridSize = 500;
  const columns = rows;
  const squareSize = `${gridSize / rows}px`;

  grid = document.querySelector('#grid');

  grid.innerHTML = '';

  grid.style.display = 'grid';
  grid.style.margin = '0 auto';
  grid.style.border = '2px solid black';
  grid.style.width = `${gridSize + 4}px`;
  grid.style.gridTemplateColumns = `repeat(${columns}, ${squareSize})`;
  grid.style.gridTemplateRows = `repeat(${rows}, ${squareSize})`;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let squareDiv = document.createElement('div');
      squareDiv.addEventListener('mouseover', () => {
        squareDiv.style.background = 'black';
      })
      grid.appendChild(squareDiv);
    }
  }
}
