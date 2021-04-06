class Background {
    constructor(ctx, backgroundSizeWidth, backgroundSizeHeight, backgroundPosX, backgroundPosY){
    this.ctx = ctx

    this.backgroundSize = {
           w: backgroundSizeWidth,
           h: backgroundSizeHeight
        }

   this.velX = 2

    this.init()

     this.backgroundPos = {
           x: backgroundPosX,
           y: backgroundPosY
       }
    // this.backgroundPosX = 0
    // this.backgroundPosY = 0

    }

    init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/Background.jpg'
    }

    drawBackground(){
    this.ctx.drawImage(this.imageInstance, this.backgroundPos.x, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
    this.ctx.drawImage(this.imageInstance, this.backgroundPos.x + this.backgroundSize.w, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
    this.move()
}

    move(){
        if(this.backgroundPos.x <= - this.backgroundSize.w) {
            this.backgroundPos.x = 0
        }
        this.backgroundPos.x -= this.velX
    }
}