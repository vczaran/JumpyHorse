import Game from './scripts/game';
import View from './scripts/view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    const game = new Game(canvas);
    new View(canvas);
})