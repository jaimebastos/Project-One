class SpecialCoin {
    constructor(ctx, specialCoinWidth, specialCoinHeight, canvasSizeWidth, specialCoinPosX, specialCoinPosY) {

        this.ctx = ctx

        this.specialCoinSize = {
            w: specialCoinWidth,
            h: specialCoinHeight
        }

        this.specialCoinCanvasWidth = canvasSizeWidth

        this.specialCoinPos = {
            x: specialCoinPosX,
            y: specialCoinPosY

        }

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/specialCoinGood.png'
    }

    drawSpecialCoin() {
        this.moveSpecialCoin()
        this.ctx.drawImage(this.imageInstance, this.specialCoinPos.x, this.specialCoinPos.y, this.specialCoinSize.w, this.specialCoinSize.h)
    }


    moveSpecialCoin() {
        this.specialCoinPos.x -= 4
    }


}