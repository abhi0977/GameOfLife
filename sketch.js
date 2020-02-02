let grid;
const rows = 20;
const cellWidth = 20;
const columns = rows; // square
const canvasSize = rows * cellWidth;

const make2DArray = (rows, columns) => {
    let arr = new Array(columns);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(columns);
    }
    return arr;
}

const initializeRandomValue = () => {
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            grid[i][j] = floor(random(2))
        }
    }
}

function setup() {
    grid = make2DArray(rows, columns);
    initializeRandomValue();
    createCanvas(canvasSize, canvasSize);
}

function draw() {
    background(0);

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            rect(i * cellWidth, j * cellWidth, cellWidth, cellWidth)
        }
    }
}