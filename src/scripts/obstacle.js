
export default class Obstacle {

    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.speedX = 3;
        this.width = width;
        this.height = height;

        this.fencepost = document.getElementById("fencepost");
    }

    drawObstacle() {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.fencepost, this.x, this.y, this.width, this.height);
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