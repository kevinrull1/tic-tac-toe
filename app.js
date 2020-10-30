let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    console.log(el)
    el.addEventListener('click', event => {
        let GameOver = false
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col


        if (gameBoard[selectedRow][selectedCol] == '-') {
            selectedCell.innerText = 'X'

            gameBoard[selectedRow][selectedCol] = 'X'

            console.log(isGameOver())

            getEmptyCell()
            do {
                x = 0 - 8
                y = 0 - 8
            } while (gameBoard(x)(y))
            return (x, y)
        }
    })
});
function getEmptyCell() {

}
function isGameOver() {
    for (let i = 0; i < 3; i++) {

        if (gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2] && gameBoard[i][0] != '_') { 
            return true
        }
    }
    return false

}
