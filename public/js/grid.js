class Grid
{
    canvas = null
    map = null
    width = 0
    height = 0
    cellSize = 0
    startX = 0
    startY = 0

    constructor(canvas, map)
    {
        this.canvas = canvas.getContext('2d')
        this.map = map
        this.width = canvas.width
        this.height = canvas.height
        this.cellSize = parseInt(this.height / map.height)
        this.startX = (this.width / 2) - (map.width * this.cellSize / 2)
        this.startY = (this.height / 2) - (map.height * this.cellSize / 2)

        canvas.addEventListener('click', e =>
        {
            this.onCanvasClick(e)
        })

        canvas.addEventListener('contextmenu', e =>
        {
            e.preventDefault()
            this.onCanvasClick(e)
        })
    }

    render()
    {
        this.renderBackground()

        this.map.fields.forEach(field =>
        {
            this.renderField(field)
        })

        this.map.patches.forEach(patch =>
        {
            this.renderPatch(patch)
        })

        this.map.structures.forEach(structure =>
        {
            this.renderStructure(structure)
        })
    }

    renderBackground()
    {
        this.canvas.fillStyle = '#111111'
        this.canvas.fillRect(0, 0, this.width, this.height)
    }

    renderField(field)
    {
        let image = document.getElementById('img.' + field.type)
        this.canvas.drawImage(image,
            this.tileX(field),
            this.tileY(field),
            this.cellSize,
            this.cellSize
        )
    }

    renderPatch(patch)
    {
        let image = document.getElementById('img.' + patch.type)
        this.canvas.drawImage(image,
            this.tileX(patch),
            this.tileY(patch),
            this.cellSize,
            this.cellSize
        )
    }

    renderStructure(structure)
    {
        const x = this.tileX(structure)
        const y = this.tileY(structure)
        const size = this.cellSize
        const angle = structure.angle() * Math.PI / 180
        const image = document.getElementById('img.' + structure.type)

        this.canvas.save()
        this.canvas.translate(x + (size / 2), y + (size / 2))
        this.canvas.rotate(angle)
        this.canvas.drawImage(image, -size / 2, -size / 2, size, size)
        this.canvas.restore()
        //this.canvas.rotate(-angle)
        //this.canvas.translate(-x, -y)
    }

    tileX(tile)
    {
        return this.startX + (tile.x * this.cellSize)
    }

    tileY(tile)
    {
        return this.startY + (tile.y * this.cellSize)
    }

    onCanvasClick(e)
    {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        for (let structure of this.map.structures)
        {
            let left = this.tileX(structure)
            let right = left + this.cellSize
            let top = this.tileY(structure)
            let bottom = top + this.cellSize

            if ((x >= left) && (x <= right) && (y >= top) && (y <= bottom))
            {
                this.onStructureClick(structure)
                break
            }
        }
    }

    onStructureClick(structure)
    {
        Game.onStructureClick(structure)
    }
}