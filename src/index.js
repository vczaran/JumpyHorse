import Game from './scripts/game';
import View from './scripts/view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    const game = new Game(canvas);
    // const view = new View(canvas);
    const start = document.getElementById("start-button");
    start.onclick = function () {
        game.startGame(game.view);
        start.classList.toggle("hide")};
    // new View(canvas);
    // const view = new View(canvas);
    // new Game(view);
})