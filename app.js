let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    console.log(el)
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameBoard[selectedRow][selectedCol] == '-') {
            selectedCell.innerText = 'X'

            gameBoard[selectedRow][selectedCol] = 'X'

            console.log(gameBoard)
            if (gameBoard[0][0] == 'x', gameBoard[0][1] == 'x', gameBoard[0][2] == 'x') {
                System.out.printIn("YOU WON");
            }

        }
    }
    })
});
