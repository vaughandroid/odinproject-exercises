window.onload = () => {
  createGrid();
}

function createGrid() {
  const rows = 16;
  const columns = rows;

  container = document.querySelector('#grid-container');
  container.style.display = 'grid';
  let columnsStyle = '';
  for (let i = 0; i < columns; i++) {
    columnsStyle += 'auto '
  }
  container.style.gridTemplateColumns = columnsStyle;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let squareDiv = document.createElement('div');
      squareDiv.textContent = `(${i}, ${j})`
      container.appendChild(squareDiv);
    }
  }
}
