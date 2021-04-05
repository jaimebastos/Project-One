class Coin {
    constructor (ctx, coinWidth, coinHeight, canvasSizeWidth, coinPosX){

        this.ctx = ctx

        this.coinSize = {
            w: coinWidth,
            h: coinHeight
        }

        this.coinCanvasWidth = canvasSizeWidth

         this.coinPos = {
           x: coinPosX,
           y: Math.floor(Math.random() * 400) 
        
       }
       this.init()

    }

    init(){
    this.imageInstance = new Image ()
    this.imageInstance.src = 'images/coin.png'
}

    drawCoin(){
    this.moveCoin()
    this.ctx.drawImage(this.imageInstance, this.coinPos.x, this.coinPos.y, this.coinSize.w, this.coinSize.h)
}


    moveCoin(){
    this.coinPos.x -= 2
    }

  
    
}