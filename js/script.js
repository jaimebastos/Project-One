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


    init(){
        this.canvasDOM = document.querySelector ('#canvas')
        this.ctx = this.canvasDOM.getContext ('2d')
        this.setCanvasSize()
        this.draw()
    },

    setCanvasSize(){
        this.canvasSize = {
            w: 900, 
            h: 500
        }
        this.canvasDOM.setAttribute ('width', this.canvasSize.w)
        this.canvasDOM.setAttribute ('height', this.canvasSize.h)
    },

    drawPlayer(){
        this.player = new Player (this.ctx, 10, 200, 100, 100)
    }




}