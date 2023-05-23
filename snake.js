//board
let blockSize = 20
let rows = 40
let columns = 50
let canvas;
let ctx;

//snake
let snakeX = blockSize * 10
let snakeY = blockSize * 10

let velocity = {
    x: 0,
    y: 0
}

//food
let foodX 
let foodY 

window.onload = function() {
    canvas = document.getElementById("canvas")
    canvas.height = rows * blockSize
    canvas.width = columns * blockSize
    ctx = canvas.getContext("2d")

    placeFood()
    document.addEventListener("keyup", changeDirection)
    setInterval(update(ctx, canvas), 1000/10)
}

function update(ctx, canvas) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "lime"
    snakeX += velocity.x * blockSize;
    snakeY += velocity.y * blockSize;
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)

    ctx.fillStyle = "red"
    ctx.fillRect(foodX, foodY, blockSize, blockSize)
}

function changeDirection(e) {
    if (e.code == "ArrowUp" || e.code == "KeyW") {
        velocity.x = 0
        velocity.y = -1
    } else if (e.code == "ArrowDown" || e.code == "KeyS") {
        velocity.x = 0
        velocity.y = 1
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        velocity.x = -1
        velocity.y = 0
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        velocity.x = 1
        velocity.y = 0
    }   
}

function placeFood() {
    foodX = Math.round(Math.random() * columns) * blockSize
    foodY = Math.round(Math.random() * rows) * blockSize
}