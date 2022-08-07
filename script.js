setupGrid(20);

let color = 'black';

function setupGrid(size) {
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.border = '1px solid grey';

    for (let i = 0; i < 900; i++) {
        let square = document.createElement('div');
        grid.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
    }
}

// grid slider
document.getElementById('grid-slider').oninput = function() {
    setupGrid(this.value);
    document.getElementById('slider-text').innerHTML = "Grid size: " + this.value + " x " + this.value;
    clearGrid();
}

// color picker
function colorSquare() {
    let color = document.getElementById('colorChoice').value;
    this.style.backgroundColor = color;
}

// clear grid
clearBtn.addEventListener('click', clearGrid);

function clearGrid() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}



