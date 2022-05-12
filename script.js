let colorMode = 'black';


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
            gridSquare.setAttribute('onmouseover', 'drawColor(this)');      
            gridColumn.appendChild(gridSquare);
        }
    }
}

function clearGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = "";
}

function setColorMode(newMode) {
    colorMode = newMode;
    console.log(colorMode);
}

function drawColor(gridSquare) {
    gridSquare.style.background = 'black';
}