let historyBtn = document.getElementById('history')
let nextBtn = document.getElementById('nextBtn')
let previousBtn = document.getElementById('previousBtn')
let boardCOntainer = document.getElementById('boardContainer')

let nextMoveArr = []

historyBtn.addEventListener('click', () => {
    gameOverMessage.style.display = 'none'
    previousBtn.style.display = 'block'
    nextBtn.style.display = 'block'
    
    nextBtn.disabled = true
    nextBtn.style.cursor = 'default'

    previousBtn.disabled = false
    previousBtn.style.cursor = 'pointer'

    placeMark()
})

previousBtn.addEventListener('click', previousMove)
nextBtn.addEventListener('click', nextMove)

function previousMove() {
    let lastMove = moveHistory.pop()
    nextMoveArr.unshift(lastMove)
    let [index, player] = lastMove

    boxes[index].innerText = ''

    if (moveHistory.length === 1) {
        previousBtn.disabled = true
        previousBtn.style.cursor = 'default'
    }
    
    if (nextMoveArr.length > 0) {
        nextBtn.disabled = false
        nextBtn.style.cursor = 'pointer'
    }
}

function nextMove() {
    let next = nextMoveArr.shift()
    let [index, player] = next
    boxes[index].innerText = `${player}`
    moveHistory.push(next)

    if (nextMoveArr.length === 0) {
        nextBtn.disabled = true
        nextBtn.style.cursor = 'default'
    }

    if (moveHistory.length > 1) {
        previousBtn.disabled = false
        previousBtn.style.cursor = 'pointer'
    }
}