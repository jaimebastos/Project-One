class Villain {
    constructor(ctx, villainWidth, villainHeight, canvasSizeWidth, villainPosX, villainPosY) {

        this.ctx = ctx

        this.villainSize = {
            w: villainWidth,
            h: villainHeight
        }

        this.villainCanvasWidth = canvasSizeWidth

        this.villainPos = {
            x: villainPosX,
            y: villainPosY

        }

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/villain1.png'
    }

    drawVillain() {
        this.moveVillain()
        this.ctx.drawImage(this.imageInstance, this.villainPos.x, this.villainPos.y, this.villainSize.w, this.villainSize.h)
    }


    moveVillain() {
        this.villainPos.x -= 4
    }


}