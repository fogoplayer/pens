function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function forwardAndLeft(){
    moveForward();
    turnLeft();
}

function drawSquare() {
    forwardAndLeft();
    forwardAndLeft();
    forwardAndLeft();
    forwardAndLeft();
    moveForward();
}

function drawThreeSquares() {
    drawSquare();
    drawSquare();
    drawSquare();
}

//Col 1
drawThreeSquares();

//Reset
turnLeft();
moveForward();
moveForward();
turnLeft();

//Col 2
drawThreeSquares();

//Reset
turnLeft();
turnLeft();

//Col 3
drawThreeSquares();