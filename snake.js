
//board

let blockSize = 25
let rows = 20
let columns = 20
let board;
let ctx;

window.onload() = () => {
    board = document.getElementById("board")
    board.height = rows * blockSize
    board.width = columns * blockSize
    ctx = board.getContext('2d')

    update()
}

function update(ctx, board) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, board.width, board.height)
}
