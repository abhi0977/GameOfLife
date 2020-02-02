let grid;
let rows = 10;
let columns = 10;

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
}

function draw() {
    
    background(220);
}