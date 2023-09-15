import Horse from "./horse";
import Obstacle from "./obstacle";
import Background from "./background";


export default class View {

    constructor (canvas) {
        this.audio = document.getElementById("gallop");
        this.over = false;
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.bg = new Background();
        this.score = 0;
        this.horse = new Horse(20, 360, 100, 70);
        this.obstacles = [];
        this.intervalID = setInterval ( () => {
            this.obstacles.push(new Obstacle(900, 360, 30, 70));
            if (this.obstacles[0].x <= 0) {
                this.obstacles.slice(1);
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
        const mute = document.getElementById("mute");
        let toggle = true;
        mute.addEventListener("click", () => {
             toggle = !toggle;
             if (!toggle) {
                this.audio.play();
             } else {
                 this.audio.pause();
             }
      });
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
        this.audio.pause();
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
