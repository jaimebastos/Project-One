class Obstacle {
    constructor (ctx, obstacleWidth, obstacleHeight, canvasSizeWidth, obstaclePosX){

        this.ctx = ctx

        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }

        this.obstacleCanvasWidth = canvasSizeWidth

         this.obstaclePos = {
           x: obstaclePosX,
           y: Math.floor(Math.random() * 400) 
        
       }
       this.init()

    }

    init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/box.png'
}

    drawObstacle(){
    this.moveObstacle()
    this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
}


    moveObstacle(){
    this.obstaclePos.x -= 2
    }

  
    
}