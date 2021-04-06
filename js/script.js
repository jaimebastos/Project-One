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
    platforms: [],
    coins: [],
    framesCounter: 0,
    FPS: 60,
    coinsWon: 0,
    lives: 1,


    init(){
        this.canvasDOM = document.querySelector ('#canvas')
        this.ctx = this.canvasDOM.getContext ('2d')
        this.setCanvasSize()
        this.drawAll()
        this.createPlayer()
        this.createBackground()
        this.createObstacle()
        this.createPlatform()
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
        
        
        this.interval = setInterval (() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()
            this.createObstacle()
            this.createPlatform()
            this.createCoin()
            this.background.drawBackground()

            this.obstacles.forEach(elm =>elm.drawObstacle())
            this.clearObstacle()
            this.coins.forEach(elm =>elm.drawCoin())
            this.clearCoin()
            this.platforms.forEach(elm => elm.drawPlatform())
            this.clearPlatform()
            this.player.draw(this.framesCounter)
            if( this.collisionsBox() ){
                if(this.lives > 0) {
                    this.looseLives()
                } else {
                    this.gameOver()
                    }
                }
            
         
            this.collisionsCoins() ? this.winCoins() : null
            
            this.collisionsPlatform() 

            this.returnToFloor()


        }, 1000/this.FPS)
    },

    createBackground(){
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, 0, 0)
    },

    createPlayer(){
        this.player = new Player(this.ctx, this.canvasSize.w, this.canvasSize.h, 60, 80, 50, 410)
    },

    createObstacle(){
        
        if (this.framesCounter % 170 === 0){
        let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w) 
        this.obstacles.push(newObstacle)//(this.ctx, 100, 100, this.canvasSize.w, this.canvasSize.w, this.canvasSize.h - 120))
       //console.log(this.obstacles)
    }

    },

    clearObstacle(){
       this.obstacles = this.obstacles.filter(elm => elm.obstaclePos.x + elm.obstacleSize.w >= 0)
    },

    createCoin(){
        
        if (this.framesCounter % 190 === 0){
        let newCoin =  new Coin(this.ctx, 30, 30, this.canvasSize.w, this.canvasSize.w) 
        this.coins.push(newCoin)
       //console.log(this.obstacles)
    }

    },

    clearCoin(){
       this.coins = this.coins.filter(elm => elm.coinPos.x + elm.coinSize.w >= 0)
    },

    createPlatform() {

        if (this.framesCounter % 160 === 0) {
            let newPlatform = new Platform(this.ctx, 150, 40, this.canvasSize.w, this.canvasSize.w)
            this.platforms.push(newPlatform)//(this.ctx, 100, 100, this.canvasSize.w, this.canvasSize.w, this.canvasSize.h - 120))
            console.log(this.platforms)
        }

    },

    clearPlatform() {
        this.platforms = this.platforms.filter(elm => elm.platformPos.x + elm.platformSize.w >= 0)
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
 },

    collisionsBox() {

//JUGADOR VS CAJAS

        return this.obstacles.some((obs, idx)=> {
        
        if(this.player.playerPos.x <= obs.obstaclePos.x + obs.obstacleSize.w &&
   this.player.playerPos.x + this.player.playerSize.w >= obs.obstaclePos.x &&
   this.player.playerPos.y <= obs.obstaclePos.y + obs.obstacleSize.h &&
   this.player.playerSize.h + this.player.playerPos.y >= obs.obstaclePos.y) {
        this.obstacles.splice(idx, 1)
        return true
   }
            
    })
},

    collisionsCoins() {

        //JUGADOR VS MONEDAS

        return this.coins.some((elm, idx) => {

            if (this.player.playerPos.x <= elm.coinPos.x + elm.coinSize.w &&
                this.player.playerPos.x + this.player.playerSize.w >= elm.coinPos.x &&
                this.player.playerPos.y <= elm.coinPos.y + elm.coinSize.h &&
                this.player.playerSize.h + this.player.playerPos.y >= elm.coinPos.y) {
                    this.coins.splice(idx, 1)
                     return true
                }
            
        })
    },

    

    collisionsPlatform() {

        //JUGADOR VS CAJAS

        return this.platforms.some((plat, idx) => {

            if(this.player.playerPos.x <= plat.platformPos.x + plat.platformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w >= plat.platformPos.x &&
                this.player.playerPos.y <= plat.platformPos.y + plat.platformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y >= plat.platformPos.y) {
                
                    
                    if (this.player.playerPos.y + this.player.playerSize.h > this.platforms[idx].platformPos.y) {
                        this.player.posY0 = this.platforms[idx].platformPos.y - this.player.playerSize.h
                        this.velY = 1
                    }else if (this.player.playerPos.y < this.platforms[idx].platformPos.y + 40) {
                        this.player.velY *= -1
                    } 
            }
    })
        
},

returnToFloor() {
    this.platforms.forEach(elm => {
        if (this.player.playerPos.x > elm.platformPos.x + elm.platformSize.w)
            this.player.posY0 = this.canvasSize.h - this.player.playerSize.h - 20
    })
    
},


    winCoins() {
        this.coinsWon += 20
        document.querySelector('.score span').innerHTML = this.coinsWon
    },

    looseLives() {
        this.lives -= 1
        document.querySelector('.lives span').innerHTML = this.lives
    },

gameOver() {
    clearInterval(this.interval)
    
    this.imageInstance = new Image(this.canvasSize.w, this.canvasSize.h)
    this.imageInstance.src = 'images/GameOver.jpg'
},
endScreen() {
    this.imageInstance = new Image(this.canvasSize.w, this.canvasSize.h)
    this.imageInstance.src = 'images/GameOver.jpg'
}
}