import Horse from "./horse";
import Obstacle from "./obstacle";


export default class View {

    constructor (canvas) {
        const ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.score = 0;
        this.horse = new Horse(20, 360, 100, 70);
        this.obstacles = [new Obstacle(900, 360, 20, 60)];
        this.intervalID = setInterval ( () => {
            this.obstacles.push(new Obstacle(900, 360, 20, 60));
            if (this.obstacles[0].x <= 0) {
                this.obstacles.shift();
            }
        }, 7000);

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && this.horse.y === 360) {
                this.horse.jump();
            };
        })

    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.horse.drawHorse();
        this.obstacles.forEach(obs => {
            obs.drawObstacle();
        });
        this.drawScore();

        requestAnimationFrame(() => {
            this.draw(ctx);
            this.collision();
        });

    }

    collision () {
        const obs = this.obstacles[0];
        const horse = this.horse;

        if ((obs.x > horse.x) 
            && (obs.x < (horse.x + horse.width))
            && ((obs.x + obs.width) > horse.x)
            && ((obs.x + obs.width) < (horse.x + horse.width))
            && (horse.y + horse.height >= obs.y)
            && (horse.y + horse.height >= obs.y - obs.height))
              {console.log(true);
                // return true;}
                alert("Game Over!")}
                // this.collision = true}
                else {this.scoreUp()};
    }

    scoreUp () {
        if (this.horse.x > this.obstacles[0].x && this.obstacles[0].x > 17)
        {this.score += 1;
        console.log(this.score);}
    }

    drawScore() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        this.x = 435;
        this.y = 50;
        ctx.font = "40pt serif";
        ctx.fillStyle = "black";
        ctx.fillText(this.score, this.x, this.y);
      }
}