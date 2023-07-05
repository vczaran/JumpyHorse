import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    const game = new Game(canvas);
    const startModal = document.getElementById("startModal");
    startModal.style.display = "block";
    const start = document.getElementById("start-button");
    start.onclick = function () {
        game.startGame(game.view);
        startModal.style.display = "none";
    };
    
})