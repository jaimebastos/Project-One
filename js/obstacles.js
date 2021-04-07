class Obstacle {
    constructor (ctx, obstacleWidth, obstacleHeight, canvasSizeWidth, obstaclePosX, obstaclePosY){

        this.ctx = ctx

        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }

        this.obstacleCanvasWidth = canvasSizeWidth

         this.obstaclePos = {
           x: obstaclePosX,
           y: obstaclePosY
           //Math.floor(Math.random() * (400 - 250) + 250)
        
       }
       this.init()

    }

    init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/spikeBox.png'
}

    drawObstacle(){
    this.moveObstacle()
    this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
}


    moveObstacle(){
    this.obstaclePos.x -= 4
    }

  
    
}