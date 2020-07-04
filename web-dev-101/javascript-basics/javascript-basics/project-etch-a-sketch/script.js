window.onload = () => {
  createGrid();
}

function createGrid() {
  const rows = 16;
  const columns = rows;
  const squareSize = '30px';

  container = document.querySelector('#grid-container');
  container.style.display = 'inline-grid';
  container.style.gridTemplateColumns = `repeat(${columns}, ${squareSize})`;
  container.style.gridTemplateRows = `repeat(${rows}, ${squareSize})`;
  container.style.border = '2px solid black';
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let squareDiv = document.createElement('div');
      squareDiv.style.border = '0.5px solid black';
      squareDiv.addEventListener('mouseover', () => { 
        console.log(`mouseover (${j}, ${i})`) 
        squareDiv.style.background = 'black';
      })
      container.appendChild(squareDiv);
    }
  }
}
