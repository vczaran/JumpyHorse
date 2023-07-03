import Horse from "./horse";
import Obstacle from "./obstacle";


export default class View {

    constructor (canvas) {
        const ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.score = 0;
        // this.collision = false;
        this.horse = new Horse(20, 360, 100, 70);
        this.obstacles = [new Obstacle(900, 360, 20, 60)];
        this.intervalID = setInterval ( () => {
            this.obstacles.push(new Obstacle(900, 360, 20, 60));
            if (this.obstacles[0].x <= 0) {
                // let collision = false;
                // console.log(collision);
                this.obstacles.shift();
                // this.called = false;
                // console.log(this.obstacles);
            }
        }, 7000);
        // this.draw(ctx);

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && this.horse.y === 360) {
                this.horse.jump();
            };
            // clearInterval(this.intervalID);
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

        // console.log(obs.x);
        // console.log(obs.y);
        // console.log(horse.x);
        // console.log(horse.y);

        if ((obs.x > horse.x) 
            && (obs.x < (horse.x + horse.width))
            && ((obs.x + obs.width) > horse.x)
            && ((obs.x + obs.width) < (horse.x + horse.width))
            && ((horse.y + horse.height) >= obs.y)
            && (horse.y + horse.height >= obs.y - obs.height))
              {console.log(true)}
                // this.collision = true}
                // alert("Game Over!")};
                else {this.scoreUp()};
    }

    scoreUp () {
        if (this.horse.x > this.obstacles[0].x && this.obstacles[0].x > 17)
        {this.score += 1;
        console.log(this.score);}
        // this.called = true};
    }

    drawScore() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        this.x = 435;
        this.y = 50;
        ctx.font = "bold 40pt serif";
        ctx.fillStyle = "black";
        ctx.fillText(this.score, this.x, this.y);
      }
}