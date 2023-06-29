export default class Horse {
    constructor (x, y) {
        this.gravity = 0.3;
        this.gravitySpeed = 0;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = 700;
        this.height = 450;

        this.fall = function () {
            if (this.y < 250) {
            this.gravitySpeed += this.gravity;
            this.y += this.speedY + this.gravitySpeed;
            this.drawHorse();
            requestAnimationFrame ( () => {
                this.fall();
            })
        } else {
            this.y = 250;
        }
        }

        requestAnimationFrame ( () => {
            this.fall();
        })
    }

    drawHorse () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, this.width, this.height);
        const horse1 = document.getElementById("horse1");
        ctx.drawImage(horse1, this.x, this.y, 300, 300);
    }


    // jump () {
    //     this.y += 100;
    // }

}