function generateColumns(gridSideLength) {
    const gridContainer = document.querySelector('.grid-container');
    let gridColumn;

    gridContainer.innerHTML = "";

    for(let i = 0; i < gridSideLength; i++) {
        gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridContainer.appendChild(gridColumn);
        for(let j = 0; j < gridSideLength; j++) {
            gridSquare = document.createElement('div');      
            gridColumn.appendChild(gridSquare);
        }
    }
}