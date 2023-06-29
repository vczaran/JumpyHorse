import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('background');
    // window.addEventListener ( "keydown", (e) => {
    //     if (e.code === "Space") {
    //         this.jump();
    //     };
    // })
    new Game(canvas);
})