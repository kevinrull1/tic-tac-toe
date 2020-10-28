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

            console.log(gameBoard)

            if (gameBoard[0][0] == 'X' && gameBoard[0][1] == 'X' && gameBoard[0][2] == 'X') {
                console.log('winner')
                GameOver = true
            }
            if (gameBoard[1][0] == 'X' && gameBoard[1][1] == 'X' && gameBoard[1][2] == 'X') {
                console.log('winner')
            }
            if (gameBoard[2][0] == 'X' && gameBoard[2][1] == 'X' && gameBoard[2][2] == 'X') {
                console.log('winner')
            }
            if (gameBoard[0][0] == 'X' && gameBoard[1][1] == 'X' && gameBoard[2][2] == 'X') {
                console.log('winner')
            }
            if (gameBoard[0][2] == 'X' && gameBoard[1][1] == 'X' && gameBoard[2][0] == 'X') {
                console.log('winner')
            }
            if (!isGameOver()) {
                // arvuti käib
                emptyCell = getEmptyCell()
            }
            console.log(gameBoard)

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

}
