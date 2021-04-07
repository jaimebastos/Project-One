class Finish  {
    constructor (ctx, finishPosX, finishPosY){
        this.ctx = ctx
        this.finishSize = {
            w: 200,
            h: 200
        }
        this.finishPos = {
            x: finishPosX,
            y: finishPosY
        }

        this.velX = 2
        this.init()

    }


    init(){
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/finish.png'
    }

    drawFinish(){
    this.ctx.drawImage(this.imageInstance, this.finishPos.x, this.finishPos.y, this.finishSize.w, this.finishSize.h)
    this.moveFinish()
}

    moveFinish(){
        this.finishPos.x -= this.velX
    }


}



// finishLevel(){
//     this.imageInstance = new Image(200, 200)
//     this.imageInstance.src = 'images/finish.png'

//      if (this.framesCounter === 1000) {
            
//             let newPlatform = new Platform(this.ctx, 150, 40, this.canvasSize.w, this.canvasSize.w, 350)
//             this.platforms.push(newPlatform)//(this.ctx, 100, 100, this.canvasSize.w, this.canvasSize.w, this.canvasSize.h - 120))
//             //console.log(this.platforms)
//         }
// }