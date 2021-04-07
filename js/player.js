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

      this.imageInstance = undefined
        
       this.velY = 1
       this.gravity = 0.4
       
       this.init()
    
    }

init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/newSprite.png'
    this.imageInstance.frames = 4
    this.imageInstance.framesIndex = 0
}

draw(framesCounter){
    this.move()

    this.ctx.drawImage(
        this.imageInstance,

        this.imageInstance.framesIndex * Math.floor(this.imageInstance.width / this.imageInstance.frames), //comienza a cortar en X
        0,  //comienza a cortar en Y
           Math.floor( this.imageInstance.width/this.imageInstance.frames),//ancho que recorta
            this.imageInstance.height,//alto que recorta
        this.playerPos.x, 
        this.playerPos.y, 
        this.playerSize.w, 
        this.playerSize.h)

        this.animatePlayer(framesCounter)
}

animatePlayer(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0;
        }
    }

moveRight(){
this.playerPos.x += 15
}

moveLeft(){
if(this.playerPos.x > 0){
    this.playerPos.x -=15
} else{
    this.playerPos.x = 0
}
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
    if(this.playerPos.y === this.posY0){
    this.playerPos.y -= 20
    this.velY -= 15 
    } else {
        return false
    }

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