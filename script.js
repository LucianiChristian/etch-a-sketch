let colorMode = 'black';
let warm = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'];
let cool = ['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8', '#48CAE4', '#90E0EF', '#ade8f4', '#caf0f8'];

function generateGrid(gridSideLength) {
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
            gridSquare.classList.add('grid-square');    

            gridColumn.appendChild(gridSquare);
        }
    }
}

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridContainer = document.querySelector('.grid-container');

    gridSquares.forEach(function(square) {
        square.style.background = gridContainer.style.background;
      });
}

function setColorMode(newMode) {
    const gridContainer = document.querySelector('.grid-container');
    
    colorMode = newMode;
    console.log(colorMode);

    if(colorMode === 'black') {
        gridContainer.style.boxShadow = '5px 5px 8px black';
    }
    else if (colorMode === 'cool') {
        gridContainer.style.boxShadow = `5px 5px 8px ${cool[0]}, 10px 10px 8px ${cool[Math.floor(cool.length / 2)]}, 15px 15px 8px ${cool[cool.length - 1]}`;
    }
    else if (colorMode === 'warm') {
        gridContainer.style.boxShadow = `5px 5px 8px ${warm[0]}, 10px 10px 8px ${warm[Math.floor(warm.length / 2)]}`;
    }
}

function drawColor(gridSquare) {
    if(colorMode === 'black') {
        gridSquare.style.background = 'black';
    }
    else if(colorMode === 'warm') {
        const randomColor = warm[Math.floor(Math.random() * warm.length)];
        gridSquare.style.background = randomColor;
    }
    else if(colorMode === 'cool') {
        const randomColor = cool[Math.floor(Math.random() * cool.length)];
        gridSquare.style.background = randomColor;
    }
}