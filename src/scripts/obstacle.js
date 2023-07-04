export default class Obstacle {

    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.speedX = 2;
        this.width = width;
        this.height = height;
    }

    drawObstacle() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.moveObstacle();
    }

    moveObstacle () {
            this.x -= this.speedX;
    }

    // speedUp () {
    //     if (score % 5 === 0) {
    //         this.speedX += 1;
    //     }
    // }


}