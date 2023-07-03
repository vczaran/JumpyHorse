export default class Horse {
    constructor (x, y, width, height) {
        this.gravity = 0.3;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = width;
        this.height = height;

        this.runhorse1 = document.getElementById("runhorse1");

    }

    drawHorse () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        // ctx.fillStyle = "brown";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.runhorse1, this.x, this.y, this.width, this.height);
        this.move();
        if (this.y > 360) {
            this.y = 360;
        }
    }

    move () {
        this.y += this.speedY;
        this.speedY += this.gravity;
    }

    jump () {
        this.speedY = -10;
    }
}