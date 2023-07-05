export default class Horse {
    constructor (x, y, width, height) {
        this.gravity = 0.3;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = width;
        this.height = height;
        this.counter = 0;
        this.frameIndex = 0;
        this.horses = document.getElementById("running-horse").children;

    }

    drawHorse () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        this.counter += 1;

        if (this.counter % 7 === 0) {
            this.frameIndex += 1;
            if (this.frameIndex === 5) {
                this.frameIndex = 0;
            };
        };

        ctx.drawImage(this.horses[this.frameIndex], this.x, this.y, this.width, this.height);
    
        this.move();
        if (this.y > 360) {
            this.y = 360;
        };
    }

    move () {
        this.y += this.speedY;
        this.speedY += this.gravity;
    }

    jump () {
        this.speedY = -10;
    }
}