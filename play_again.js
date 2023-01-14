let playAgainBtn = document.getElementById('playAgain')

playAgainBtn.addEventListener('click', () => {
    restart()
    gameOverMessage.style.display = 'none'
    previousBtn.style.display = 'none'
    nextBtn.style.display = 'none'
})