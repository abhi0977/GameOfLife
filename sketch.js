let grid;
const rows = 150;
const cellWidth = 5;
const columns = rows; // squares
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

const countNeighbors = (grid, x, y) => {
    let sum = 0;
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            let col = (x + i + columns) % columns;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
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
            if(grid[i][j]){
                fill(255);
                stroke(0);
                rect(i * cellWidth, j * cellWidth, cellWidth, cellWidth);
            }
        }
    }

    let next = make2DArray(rows, columns);

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let state = grid[i][j];
            let neighbors = countNeighbors(grid, i, j);

            if(state === 0 && neighbors === 3){
                next[i][j] = 1;
            }else if(state === 1 && (neighbors < 2 || neighbors > 3)){
                next[i][j] = 0;
            }else{
                next[i][j] = state;
            }
        }
    }

    grid = next;

}