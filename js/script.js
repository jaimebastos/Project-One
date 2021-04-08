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
    lives: 3,
    finishLine: undefined, 
    gameFinished: false,
    audioBackground: undefined,
    audioBox: undefined,
    audioCoin: undefined,
    audioGameOver: undefined,
    audioWin: undefined,
    specialCoin: undefined,

    init(){

        this.canvasDOM = document.querySelector ('#canvas')
        this.ctx = this.canvasDOM.getContext ('2d')
        this.setCanvasSize()
        //this.drawAll()
        this.createPlayer()
        this.createBackground()
        this.createObstacle()
        this.createPlatform()
        this.createFinishLine()
        //this.createSpecialCoin()
        this.setListeners()  
         
        
    },

    start(){
        this.reset()
        this.drawAll()
        this.createAudio()
        this.audioBackground.play()
        this.audioBackground.volume = 0.05
     
    },

    reset() {
    this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, 0, 0)
    this.player = new Player(this.ctx, this.canvasSize.w, this.canvasSize.h, 60, 80, 50, 410)
    //this.specialCoin = new SpecialCoin(this.ctx, 40, 40, this.canvasSize.w, this.canvasSize.w, 100)
    this.obstacles = []
    this.coins = []
    this.platforms = []
    this.lives = 3
    this.coinsWon = 0
    document.querySelector('.score span').innerHTML = this.coinsWon
    document.querySelector('.lives span').innerHTML = this.lives
    this.framesCounter = 0
    this.finishLine = new Finish(this.ctx, 5000, 300)
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
            this.createSpecialCoin()
            
            this.background.drawBackground()
            this.finishLine.drawFinish()
            if(this.specialCoin) this.specialCoin.drawSpecialCoin() 

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
                    this.audioBox.play()
                    this.audioBox.volume = 0.15
                } else {
                    this.gameOver()
                    }
            }

            if(this.collisionsCoins()) {
                this.winCoins()
                this.audioCoin.play()
                this.audioCoin.volume = 0.15
            }  

            if (this.collisionSpecialCoin()) {
                this.lives++
                document.querySelector('.lives span').innerHTML = this.lives
                this.audioCoin.play()
                this.audioCoin.volume = 0.15
            }
            
            this.collisionsPlatform() 

            if(this.collisionFinish()) {
                this.audioWin.play()
                this.audioWin.volume = 0.3
                clearInterval(this.interval)
                this.interval = undefined
                this.clearScreen()
                this.finalScreen()
                
            } 

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
        // if (this.framesCounter % 170 === 0){
        // let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w) 
        // this.obstacles.push(newObstacle)
    // }
        if (this.framesCounter === 12) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 85) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 80) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 200) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 290) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 320) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 350) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 420) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 500) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 520) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 650) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 300) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 750) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 830) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 340) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 900) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 1150) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 200) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 1300) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 1700) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 1780) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 1860) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }

        if (this.framesCounter === 2000) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 2012) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }
        if (this.framesCounter === 2024) {
            let newObstacle =  new Obstacle(this.ctx, 80, 80, this.canvasSize.w, this.canvasSize.w, 400) 
            this.obstacles.push(newObstacle)
        }

    },
    
    createCoin(){
        if (this.framesCounter % 60 === 0){
            let newCoin =  new Coin(this.ctx, 30, 30, this.canvasSize.w, this.canvasSize.w) 
            this.coins.push(newCoin)  
        }  
    },

    createSpecialCoin() {
        if(this.framesCounter === 1100) {
            this.specialCoin = new SpecialCoin(this.ctx, 40, 40, this.canvasSize.w, this.canvasSize.w, 200)
        }
    },
    
    clearObstacle(){
        this.obstacles = this.obstacles.filter(elm => elm.obstaclePos.x + elm.obstacleSize.w >= 0)
    },
    
    clearCoin(){
        this.coins = this.coins.filter(elm => elm.coinPos.x + elm.coinSize.w >= 0)
    },
    
    
    createFinishLine(){
        this.finishLine = new Finish(this.ctx, 5000, 300)
    },
    
    drawFinishLine() {
        this.framesCounter >= 1000 ? this.finishLine.drawFinish() : null
    },

    collisionFinish(){
        if(this.player.playerPos.x <= this.finishLine.finishPos.x + this.finishLine.finishSize.w &&
            this.player.playerPos.x + this.player.playerSize.w >= this.finishLine.finishPos.x &&
            this.player.playerPos.y <= this.finishLine.finishPos.y + this.finishLine.finishSize.h &&
            this.player.playerSize.h + this.player.playerPos.y >= this.finishLine.finishPos.y){
              return true  
            }
            
            
    },


    createPlatform(){

        if (this.framesCounter === 10) {
            
            let newPlatform = new Platform(this.ctx, 150, 40, this.canvasSize.w, this.canvasSize.w, 300)
            this.platforms.push(newPlatform)
            
        }

         if (this.framesCounter === 80) {
            
            let newPlatform = new Platform(this.ctx, 110, 40, this.canvasSize.w, this.canvasSize.w, 150)
            this.platforms.push(newPlatform)  
        }

         if (this.framesCounter === 140) {
            
            let newPlatform = new Platform(this.ctx, 180, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }

         if (this.framesCounter === 600) {
            
            let newPlatform = new Platform(this.ctx, 130, 40, this.canvasSize.w, this.canvasSize.w, 250)
            this.platforms.push(newPlatform)  
        }

         if (this.framesCounter === 700) {
            
            let newPlatform = new Platform(this.ctx, 180, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }

         if (this.framesCounter === 1000) {
            
            let newPlatform = new Platform(this.ctx, 100, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }

         if (this.framesCounter === 1100) {
            
            let newPlatform = new Platform(this.ctx, 70, 40, this.canvasSize.w, this.canvasSize.w, 250)
            this.platforms.push(newPlatform)
        }

         if (this.framesCounter === 1200) {
            
            let newPlatform = new Platform(this.ctx, 190, 40, this.canvasSize.w, this.canvasSize.w, 150)
            this.platforms.push(newPlatform)
        }

         if (this.framesCounter === 1400) {
            
            let newPlatform = new Platform(this.ctx, 60, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }
         if (this.framesCounter === 1450) {
            
            let newPlatform = new Platform(this.ctx, 130, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }
         if (this.framesCounter === 1500) {
            
            let newPlatform = new Platform(this.ctx, 200, 40, this.canvasSize.w, this.canvasSize.w, 350)
            this.platforms.push(newPlatform)
        }
         if (this.framesCounter === 1600) {
            
            let newPlatform = new Platform(this.ctx, 190, 40, this.canvasSize.w, this.canvasSize.w, 300)
            this.platforms.push(newPlatform)
        }
         if (this.framesCounter === 1650) {
            
            let newPlatform = new Platform(this.ctx, 70, 40, this.canvasSize.w, this.canvasSize.w, 150)
            this.platforms.push(newPlatform)
        }
         if (this.framesCounter === 1700) {
            
            let newPlatform = new Platform(this.ctx, 70, 40, this.canvasSize.w, this.canvasSize.w, 150)
            this.platforms.push(newPlatform)
        }


    },

    clearPlatform(){
        this.platforms = this.platforms.filter(elm => elm.platformPos.x + elm.platformSize.w >= 0)
    },

    clearScreen(){
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    setListeners(){
        document.onkeyup = e => {
        e.key === 'ArrowRight' ? this.player.moveRight() : null
        e.key === 'ArrowLeft' ? this.player.moveLeft() : null
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

    collisionSpecialCoin() {

        //JUGADOR VS MONEDA ESPECIAL
        //existe special coin?
        if(!this.specialCoin)  {
            //si no existe no hay colision, fin
            return false
        }

        if (this.player.playerPos.x <= this.specialCoin.specialCoinPos.x + this.specialCoin.specialCoinSize.w &&
            this.player.playerPos.x + this.player.playerSize.w >= this.specialCoin.specialCoinPos.x &&
            this.player.playerPos.y <= this.specialCoin.specialCoinPos.y + this.specialCoin.specialCoinSize.h &&
            this.player.playerSize.h + this.player.playerPos.y >= this.specialCoin.specialCoinPos.y) {
                    this.specialCoin = undefined
                     return true
                }
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
                
                    //pies player
                    if (this.player.playerPos.y + this.player.playerSize.h >= this.platforms[idx].platformPos.y && this.player.playerPos.y < this.platforms[idx].platformPos.y) {
                        this.player.posY0 = this.platforms[idx].platformPos.y - this.player.playerSize.h
                        this.velY = 1
                    //cabeza player
                    }else if (this.player.playerPos.y < this.platforms[idx].platformPos.y + 20) {
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
    this.audioGameOver.play()
    this.audioGameOver.volume = 0.3
    clearInterval(this.interval)
    this.interval = undefined
    this.imageInstance = new Image
    this.imageInstance.src = 'images/GameOver.jpg'
    this.imageInstance.onload = () => this.ctx.drawImage(this.imageInstance, 0, 0, this.canvasSize.w, this.canvasSize.h)

},

finalScreen() {
    if (this.coinsWon <= 100) {
        this.imageInstance = new Image
        this.imageInstance.src = 'images/destroyed-auto.jpg'
        this.imageInstance.onload = () => this.ctx.drawImage(this.imageInstance, 260, 150, 300, 200)
        game.ctx.font = '100px VT323'
        game.ctx.fillText('YOU WON!', 280, 100)
        game.ctx.font = '80px VT323'
        game.ctx.fillText('and this is your prize', 100, 400)
    } else if (this.coinsWon > 100 && this.coinsWon < 300) {
        this.imageInstance = new Image
        this.imageInstance.src = 'images/normal car.jpg'
        this.imageInstance.onload = () => this.ctx.drawImage(this.imageInstance, 260, 150, 300, 200)
        game.ctx.font = '100px VT323'
        game.ctx.fillText('YOU WON!', 280, 100)
        game.ctx.font = '80px VT323'
        game.ctx.fillText('and this is your prize', 100, 400)
    } else if (this.coinsWon >= 300) {
        this.imageInstance = new Image
        this.imageInstance.src = 'images/greatcar.jpg'
        this.imageInstance.onload = () => this.ctx.drawImage(this.imageInstance, 300, 150, 400, 200)
        game.ctx.font = '100px VT323'
        game.ctx.fillText('YOU WON!', 280, 100)
        game.ctx.font = '80px VT323'
        game.ctx.fillText('and this is your prize', 100, 400)
    }
},

createAudio(){
    this.audioBackground = new Audio ('audio/POL-mad-chase-short.wav')
    this.audioBox = new Audio('audio/button-10.wav')
    this.audioCoin = new Audio('audio/magic-chime-01.wav')
    this.audioGameOver = new Audio('audio/man-scream-03.wav')
    this.audioWin = new Audio('audio/win.wav')
}

}