   
   export default class Background {
   constructor () {
        this.bg = new Image();
        this.bg.src = "../images/longfarm.png"
        this.x = 0;
    }

    drawBackground () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.bg, this.x-=2, 0, this.bg.width, 490);
        if (this.x <= -4000) {
            this.x = 0;
        }
    }

   }