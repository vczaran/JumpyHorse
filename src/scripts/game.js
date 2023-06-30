import Horse from "./horse";
import Obstacle from "./obstacle";

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        const horse = new Horse(0, 250);

        window.addEventListener ( "keydown", (e) => {
            if (e.code === "Space") {
                horse.jump();
            };
        })

        window.addEventListener ( "keyup", (e) => {
            if (e.code === "Space") {
                horse.fall();
            };
        })
    }


}