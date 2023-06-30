import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    new Game(canvas);
})