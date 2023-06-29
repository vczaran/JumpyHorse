import Horse from "./horse";
import Obstacle from "./obstacle";

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        new Horse(0, 100);
    }

}