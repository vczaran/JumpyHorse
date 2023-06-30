import Horse from "./horse";
import Obstacle from "./obstacle";


export default class View {

    constructor (canvas) {
        const ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };

        this.horse = new Horse(0, 250);
        this.obstacles = [new Obstacle(900, 360)];
        setInterval ( () => {
            this.obstacles.push(new Obstacle(900, 360));
        }, 7000);
        // this.obs = new Obstacle(900, 360);
        this.draw(ctx);

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && this.horse.y === 250) {
                this.horse.jump();
            };
        })

        // window.addEventListener("keyup", (e) => {
        //     if (e.code === "Space") {
        //         this.horse.fall();
        //     };
        // })
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.horse.drawHorse();
        // this.obs.drawObstacle();
        this.obstacles.forEach(obs => {
            obs.drawObstacle();
        });

        requestAnimationFrame(() => {
            this.draw(ctx);
        });
    }
}