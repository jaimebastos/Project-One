class Explosion {
    constructor(ctx, explosionWidth, explosionHeight, explosionPosX, explosionPosY) {
        this.ctx = ctx

        this.Pos = {
            x: explosionPosX,
            y: explosionPosY
        }

        this.Size = {
            w: explosionWidth,
            h: explosionHeight
        }

        this.imageInstance = undefined

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/explosion.png'
        this.imageInstance.frames = 4
        this.imageInstance.framesIndex = 0
    }

    draw(framesCounter) {

        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * Math.floor(this.imageInstance.width / this.imageInstance.frames), //comienza a cortar en X
            0,  //comienza a cortar en Y
            Math.floor(this.imageInstance.width / this.imageInstance.frames),//ancho que recorta
            this.imageInstance.height,//alto que recorta
            this.Pos.x,
            this.Pos.y,
            this.Size.w,
            this.Size.h)

            this.animateExplosion(framesCounter)
    }

    animateExplosion(framesCounter) {

        if (framesCounter % 5 == 0) {
            this.imageInstance.framesIndex++;
        }

        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.src = ""
        }
    }
}