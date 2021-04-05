class Player {
    constructor (ctx, canvasSizeWidth, canvasSizeHeight, playerWidth, playerHeight, playerPosX, playerPosY){
       this.ctx = ctx

       this.playerCanvasSize = {
           w: canvasSizeWidth,
           h: canvasSizeHeight
        }

       this.playerPos = {
           x: playerPosX,
           y: playerPosY
       }

      

        this.playerSize = {
            w: playerWidth,
            h: playerHeight
     }

      this.posY0 = canvasSizeHeight - playerHeight - 20

       this.velY = 1
       this.gravity = 0.4
       this.init()
    
    }

init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/sprite.png'
}

draw(){
    this.move()
    this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
}

moveRight(){
this.playerPos.x += 10
}

move(){
    if (this.playerPos.y < this.posY0) {
        this.playerPos.y += this.velY
        this.velY += this.gravity
    } else {
        this.playerPos.y = this.posY0
        this.velY = 1
    }
}

jump(){
    this.playerPos.y -= 50
    this.velY -= 10
}

bend(){

    this.playerSize.h = 35 
    this.posY0 = this.playerCanvasSize.h - this.playerSize.h - 20
    setTimeout( ()=> {
        this.grow()
    }, 2000)
    
}

grow(){
    if (this.playerSize.h === 35){
        this.playerSize.h = 70
        this.posY0 = this.playerCanvasSize.h - this.playerSize.h - 20
    }
}

        
//         // this.posY0 < 410) {
//         // this.posY0 = 410
//         // this.playerSize.w = 70
//         // this.playerSize.h = 70
//      else {
//         this.playerPos.y = this.posY0
    
//     }



// }
}