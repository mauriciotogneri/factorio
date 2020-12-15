class Game
{
    static instance = null

    map = null
    engine = null
    grid = null
    lastTimestamp = 0

    constructor()
    {
        this.map = new MapLoader().load()
        this.engine = new Engine(this.map)

        const canvas = document.getElementById('canvas')
        canvas.width = document.body.clientWidth
        canvas.height = document.body.clientHeight
        this.grid = new Grid(canvas, this.map)
        this.grid.render()
    }

    loop(timestamp)
    {
        const start1 = performance.now()
        const delta = (timestamp - this.lastTimestamp).toFixed(2)
        this.engine.update(delta)
        const end1 = performance.now()
        console.log('update: ' + (end1 - start1).toFixed(2))

        const start2 = performance.now()
        this.grid.render()
        const end2 = performance.now()
        console.log('render: ' + (end2 - start2).toFixed(2))

        this.lastTimestamp = timestamp

        window.requestAnimationFrame(Game.step)
    }

    static init()
    {
        Game.instance = new Game()
        window.requestAnimationFrame(Game.step)
    }

    static step(timestamp)
    {
        Game.instance.loop(timestamp)
    }
}