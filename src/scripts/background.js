   
   export default class Background {
   constructor () {
        this.bg = new Image();
        this.bg.src = "/assets/images/longfarm.png";
        this.x = 0;
    }

    drawBackground () {
        const canvas = document.getElementById("background");
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.bg, this.x-=3, 0, this.bg.width, 490);
        if (this.x <= -4360) {
            this.x = 0;
        }
    }

   }