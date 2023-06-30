import Horse from "./horse";
import Obstacle from "./obstacle";


export default class View {

    constructor () {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");
    const horse = new Horse(0, 250);
    const obs = new Obstacle(900, 360);
    }

    draw (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.drawHorse();
        ctx.drawObstacle();

        requestAnimationFrame ( () => {
            this.draw(ctx);
        })
    }
}