window.onload = () => {
  createGrid();
}

function createGrid() {
  const gridSize = 500;
  const rows = 16;
  const columns = rows;
  const squareSize = `${gridSize / rows}px`;

  grid = document.querySelector('#grid');
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
