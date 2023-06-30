export default class Horse {
    constructor (x, y) {
        this.gravity = 0.3;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = 900;
        this.height = 450;

        this.horse1 = document.getElementById("horse1");

    }

    drawHorse () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        // ctx.clearRect(0, 0, this.width, this.height);
        
        ctx.drawImage(this.horse1, this.x, this.y, 300, 300);
        this.move();
        if (this.y > 250) {
            this.y = 250;
        }
    }

    move () {
        this.y += this.speedY;
        this.speedY += this.gravity;
    }

    jump () {
        this.speedY = -10;
        
        // requestAnimationFrame( () => {
        //     this.jump();
        // })
        // console.log(this.y);
    }

    fall () {
        if (this.y < 250) {
            this.speedY += this.gravity;
            this.y += this.speedY;
            this.drawHorse();

            requestAnimationFrame( () => {
                this.fall();
            })
        } 
    }
}