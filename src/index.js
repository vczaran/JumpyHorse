import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    const game = new Game(canvas);
    const modal = document.getElementById("startModal");
    modal.style.display = "block";
    const start = document.getElementById("start-button");
    start.onclick = function () {
        game.startGame(game.view);
        modal.style.display = "none";
    };
})