//board
let blockSize = 20
let rows = 40
let columns = 50
let canvas;
let ctx;
let score = 0

//snake
let snakeX = blockSize * 10
let snakeY = blockSize * 10

let velocity = {
    x: 0,
    y: 0
}

let snakeBody = []

//food
let foodX 
let foodY 

let gameOver = false;

window.onload = function() {
    canvas = document.getElementById("canvas")
    canvas.height = rows * blockSize
    canvas.width = columns * blockSize
    ctx = canvas.getContext("2d")

    placeFood()
    document.addEventListener("keyup", changeDirection)
    setInterval(update, 1000/10)
}

function update() {
    if (gameOver) {
        return;
    }


    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "red"
    ctx.fillRect(foodX, foodY, blockSize, blockSize)

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY])
        let score = 10
        placeFood();
    } 

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1]
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    ctx.fillStyle = "lime",
    snakeX += velocity.x * blockSize,
    snakeY += velocity.y * blockSize,
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)

    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    //game over cond

    if (snakeX < 0 || snakeX > columns * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true
        alert("Game over")
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            gameOver = true
            alert("Game over")
        }
        
    }
}

function changeDirection(e) {
    if ((e.code == "ArrowUp" || e.code == "KeyW") && velocity.y != 1 ) {
        velocity.x = 0;
        velocity.y = -1;
    }
    else if ((e.code == "ArrowDown" || e.code == "KeyS") && velocity.y != -1) {
        velocity.x = 0;
        velocity.y = 1;
    }
    else if ((e.code == "ArrowLeft" || e.code == "KeyA") && velocity.x != 1) {
        velocity.x = -1;
        velocity.y = 0;
    }
    else if ((e.code == "ArrowRight" || e.code == "KeyD") && velocity.x != -1) {
        velocity.x = 1;
        velocity.y = 0;
    }
}

function placeFood() {
    foodX = Math.round(Math.random() * columns) * blockSize
    foodY = Math.round(Math.random() * rows) * blockSize
}