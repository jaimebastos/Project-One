class Player {
    constructor (ctx, posX){
       this.ctx = ctx 
       this.playerPos = {
           x: posX,
           y: posY
       }
       this.playerSize = {
           w: playerWidth,
           h: playerHeight
       }
       this.init()
    }
init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'imagenes/sprite.png'
}

draw(){
    this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
}

moveRight(){
    this.playerPos.x += 10
}

}