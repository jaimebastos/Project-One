window.onload = () => {

    game.init()
    game.ctx.font = '100px VT323'
    game.ctx.fillText('PRESS START', 220, 220)
    game.ctx.fillText('to play', 290, 340)
    
}

const startButton = document.querySelector('#start')
startButton.onclick = ()=> {
  if(!game.interval){
      game.start()
  } else {
      return false
  }
}