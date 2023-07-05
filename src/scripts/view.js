import Horse from "./horse";
import Obstacle from "./obstacle";
import Background from "./background";


export default class View {

    constructor (canvas) {
        this.over = false;
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.bg = new Background();
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
       if (!this.over) { 
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.bg.drawBackground();
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
                {this.gameOver()}
                    else 
                {this.scoreUp()};
    }

    scoreUp () {
        if (this.horse.x > this.obstacles[0].x && this.obstacles[0].x > 17)
        {this.score += 1;}
    }

    drawScore() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        this.x = 435;
        this.y = 60;
        ctx.font = "40pt PixelSans";
        ctx.fillStyle = "white";
        ctx.fillText(this.score, this.x, this.y);
      }


    gameOver() {
        this.over = true;
        clearInterval(this.intervalID);
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        const endModal = document.getElementById("endModal");
        endModal.style.display = "block";
        const restart = document.getElementById("restart-button");
        restart.onclick = function () {
            this.over = false;
            const view = new View(canvas);
            view.draw(ctx);
            endModal.style.display = "none";
        };
        }
    }
