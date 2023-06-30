export default class Obstacle {

    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 3;
        this.width = 900;
        this.height = 450;
        this.drawObstacle();
    }

    drawObstacle() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 20, 60);
        this.moveObstacle();
    }

    moveObstacle () {
        requestAnimationFrame ( () => {
            this.x -= this.speedX;
            this.drawObstacle();
        })
    }

    speedUp () {
        if (score % 5 === 0) {
            this.speedX += 1;
        }
    }

}