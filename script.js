function generateColumns(gridWidth) {
    const gridContainer = document.querySelector('.grid-container');
    let gridColumn;

    gridContainer.innerHTML = "";

    for(let i = 0; i < gridWidth; i++) {
        gridColumn = document.createElement('div');
        gridContainer.appendChild(gridColumn);
    }
}