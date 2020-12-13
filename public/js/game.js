class Game
{
    static map = null
    static engine = null
    static grid = null
    static lastTimestamp = 0

    static init()
    {
        Game.map = new Map()
        Game.map.load()
        Game.engine = new Engine(Game.map)

        const canvas = document.getElementById('canvas')
        canvas.width = document.body.clientWidth
        canvas.height = document.body.clientHeight
        Game.grid = new Grid(canvas, Game.map)
        Game.grid.render()

        window.requestAnimationFrame(Game.step)
    }

    static step(timestamp)
    {
        const start1 = performance.now()
        const delta = (timestamp - Game.lastTimestamp).toFixed(2)
        Game.engine.update(delta)
        const end1 = performance.now()
        console.log('update: ' + (end1 - start1).toFixed(2))

        const start2 = performance.now()
        Game.grid.render()
        const end2 = performance.now()
        console.log('render: ' + (end2 - start2).toFixed(2))

        Game.lastTimestamp = timestamp
        window.requestAnimationFrame(Game.step)
    }
}