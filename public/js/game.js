class Game
{
    static instance = null

    map = null
    grid = null
    lastTimestamp = 0

    stepCount = 0
    updateTime = 0
    renderTime = 0

    updateTag = null
    renderTag = null

    constructor()
    {
        this.map = new MapLoader().load()
        this.map.connect()

        const topBar = document.getElementById('topBar')

        const canvas = document.getElementById('canvas')
        canvas.width = document.body.clientWidth
        canvas.height = document.body.clientHeight - topBar.clientHeight
        this.grid = new Grid(canvas, this.map)

        this.updateTag = document.getElementById('debug.update')
        this.renderTag = document.getElementById('debug.render')
    }

    loop(timestamp)
    {
        if (this.lastTimestamp > 0)
        {
            this.stepCount++

            const start1 = performance.now()
            const delta = parseFloat((timestamp - this.lastTimestamp).toFixed(2))
            this.map.update(delta)
            const end1 = performance.now()
            this.updateTime += end1 - start1

            const start2 = performance.now()
            this.grid.render()
            const end2 = performance.now()
            this.renderTime += end2 - start2

            this.updateTag.innerHTML = (this.updateTime / this.stepCount).toFixed(1) + ' ms'
            this.renderTag.innerHTML = (this.renderTime / this.stepCount).toFixed(1) + ' ms'
        }

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

    static onStructureClick(structure)
    {
        console.log('Structure clicked: ' + structure.x + ',' + structure.y)
    }
}