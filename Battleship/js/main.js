document.getElementById('start-button').addEventListener('click', () => {
    Game.init();
});

document.getElementById('save-button').addEventListener('click', () => {
    Game.saveGame();
});

document.getElementById('load-button').addEventListener('click', () => {
    Game.loadGame();
});

// Initialize the game on page load
window.addEventListener('load', () => {
    Game.init();
});