class Platform {
    constructor(ctx, platformWidth, platformHeight, canvasSizeWidth, platformPosX) {

        this.ctx = ctx

        this.platformSize = {
            w: platformWidth,
            h: platformHeight
        }

        this.platformCanvasWidth = canvasSizeWidth

        this.platformPos = {
            x: platformPosX,
            y: Math.floor(Math.random() * (300 - 250) + 250)

        }
        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/platform.png'
    }

    drawPlatform() {
        this.movePlatform()
        this.ctx.drawImage(this.imageInstance, this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }


    movePlatform() {
        this.platformPos.x -= 2
    }



}