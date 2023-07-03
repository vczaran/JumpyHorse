import View from "./view";

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.view = new View(canvas);
        // const start = document.getElementById("start-button");
        this.startGame(this.view);
        // start.onclick = function () {this.startGame(view)};
    }

    startGame(view) {
        // const start = document.getElementById("start-button");
        // start.onclick = function() { view.draw(this.ctx);};
        // this.running = true;
         view.draw(this.ctx);
    }

    gameOver() {
        if (this.view.collision === true) {
        alert("Game Over!");
        // this.running = false;
        }
    }


}