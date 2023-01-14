let startGameBtn = document.getElementById('startGameBtn')
let startMessage = document.getElementById('startGame')

startGameBtn.addEventListener('click', () => {
    startMessage.style.display = 'none'
    playerTurn.innerText = `${currentPlayer}'s Turn`
})