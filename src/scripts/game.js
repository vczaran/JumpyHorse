import View from "./view";


export default class Game { 
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.view = new View(canvas);
    }

    startGame(view) {
         view.draw(this.ctx);
    }

    gameOver() {
        if (this.view.collision() === true) {
        alert("Game Over!");
        clearInterval(this.view.intervalID);
        }
    }


}