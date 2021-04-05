const game = {
    name: 'HTML5 Canvas Application',
    description: 'nombre xxxx',
    authors: 'Paula y Jaime',
    license: undefined, 
    version: '1.0.0',
    canvasDOM: undefined, 
    ctx: undefined, 
    canvasSize: {w: undefined, h: undefined}, 
    player: undefined,
    background: undefined, 
    obstacles: [],
    coins: [],
    framesCounter: 0,
    FPS: 60,


    init(){
        this.canvasDOM = document.querySelector ('#canvas')
        this.ctx = this.canvasDOM.getContext ('2d')
        this.setCanvasSize()
        this.drawAll()
        this.createPlayer()
        this.createBackground()
        this.createObstacle()
        this.setListeners()
        
        
    },

    setCanvasSize(){
        this.canvasSize = {
            w: 900, 
            h: 500
        }
        this.canvasDOM.setAttribute ('width', this.canvasSize.w)
        this.canvasDOM.setAttribute ('height', this.canvasSize.h)
    },

    drawAll(){
        

        setInterval (() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()
            this.createObstacle()
            this.createCoin()
            this.background.drawBackground()

            this.obstacles.forEach(elm =>elm.drawObstacle())
            this.clearObstacle()
            this.coins.forEach(elm =>elm.drawCoin())
            this.clearCoin()

            this.player.draw()

        }, 1000/this.FPS)
    },

    createBackground(){
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, 0, 0)
    },

    createPlayer(){
        this.player = new Player(this.ctx, this.canvasSize.w, this.canvasSize.h, 70, 70, 50, 410)
    },

    createObstacle(){
        
        if (this.framesCounter % 170 === 0){
        let newObstacle =  new Obstacle(this.ctx, 100, 100, this.canvasSize.w, this.canvasSize.w) 
        this.obstacles.push(newObstacle)//(this.ctx, 100, 100, this.canvasSize.w, this.canvasSize.w, this.canvasSize.h - 120))
       //console.log(this.obstacles)
    }

    },

    clearObstacle(){
       this.obstacles = this.obstacles.filter(elm => elm.obstaclePos.x >= 0)
    },

    createCoin(){
        
        if (this.framesCounter % 190 === 0){
        let newCoin =  new Coin(this.ctx, 50, 50, this.canvasSize.w, this.canvasSize.w) 
        this.coins.push(newCoin)
       //console.log(this.obstacles)
    }

    },

    clearCoin(){
       this.coins = this.coins.filter(elm => elm.coinPos.x >= 0)
    },

    clearScreen(){
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    setListeners(){
        document.onkeyup = e => {
        e.key === 'ArrowRight' ? this.player.moveRight() : null
        e.key === 'ArrowUp' ? this.player.jump() : null
        e.key === 'ArrowDown' ? this.player.bend() : null
        }
 }


}