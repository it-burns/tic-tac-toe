let playerTurn = document.getElementById('playerTurn')
let restartBtn = document.getElementById('restartBtn')
let gameOverMessage = document.getElementById('gameMessage')
let whoWins = document. getElementById('message')
let boxes = Array.from(document.getElementsByClassName('box'))

const x_player = "X"
const o_player = "O"

let currentPlayer = x_player
let spaces = Array(9).fill(null)
let moveHistory = []
let currentMove = []

let gameIsOver = false

const placeMark = () => {

    boxes.forEach(box => {

        if (!gameIsOver) {
            box.addEventListener('mouseover', mouseOverEffect)
            box.addEventListener('click', registerMove)
            box.style.cursor = 'pointer'
        } else {
            box.removeEventListener('mouseover', mouseOverEffect)
            box.removeEventListener('click', registerMove)
            box.style.cursor = 'default'
        }
        box.addEventListener('mouseout', (e) => {
            const id = e.target.id
            
            if (!spaces[id]) {
                box.innerText = ''
            }
        })
    })
}

function mouseOverEffect(e) {
    const id = e.target.id

    if (!spaces[id]) {
        this.innerText = `${currentPlayer}`
    }
}

function registerMove(e) {
    const id = e.target.id

    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentMove = [id, currentPlayer]
        moveHistory.push(currentMove)

        if (playerHasWon() !== false) {
            playerTurn.innerText = 'Game Over!'
            gameOverMessage.style.display = 'flex'
            gameIsOver = true
            placeMark()
            return

        } else if (!spaces.includes(null)) {
            playerTurn.innerText = 'Game Over!'
            whoWins.innerText = 'Draw!'
            gameOverMessage.style.display = 'flex'
            placeMark()
            return
        }
        
        currentPlayer = currentPlayer == x_player ? o_player : x_player
        playerTurn.innerText = `${currentPlayer}'s Turn`
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon() {
    for (const combo of winningCombos) {
        let [a, b, c] = combo

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            whoWins.innerText = `${currentPlayer} Wins!`
            return [a, b, c]
        }
    }

    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)
    moveHistory = []
    currentMove = []
    nextMoveArr = []
    gameIsOver = false

    boxes.forEach(box => {
        box.innerText = ''
    })

    currentPlayer = x_player
    playerTurn.innerText = `${currentPlayer}'s Turn`

    placeMark()
}

placeMark()
