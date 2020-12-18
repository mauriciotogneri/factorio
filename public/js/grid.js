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
            if (structure.isConveyor())
            {
                this.renderStructure(structure)
            }
        })

        this.map.structures.forEach(structure =>
        {
            if (!structure.isConveyor())
            {
                this.renderStructure(structure)
            }
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
        const image = document.getElementById('img.' + structure.type + structure.subtype)

        if (angle !== 0)
        {
            this.canvas.save()
            this.canvas.translate(x + (size / 2), y + (size / 2))
            this.canvas.rotate(angle)
            this.canvas.drawImage(image, -size / 2, -size / 2, size, size)
            this.canvas.restore()
        }
        else
        {
            this.canvas.drawImage(image, x, y, size, size)
        }

        if (structure.isConveyor())
        {
            const resourceSize = size / Conveyor.MAX_ITEMS;
            const resourceOffset = (size / 2) - (resourceSize / 2)

            for (let i = 0; i < structure.resources.length; i++)
            {
                let resource = structure.resources[i]
                let progress = structure.progress[i]

                let resourceImage = document.getElementById('img.resource.ore.' + resource.type)

                if (structure.direction === Direction.RIGHT)
                {
                    this.canvas.drawImage(resourceImage, x + (size * progress) - resourceSize, y + resourceOffset, resourceSize, resourceSize)
                }
                else if (structure.direction === Direction.LEFT)
                {
                    this.canvas.drawImage(resourceImage, x - (size * progress) + size, y + resourceOffset, resourceSize, resourceSize)
                }
                else if (structure.direction === Direction.UP)
                {
                    this.canvas.drawImage(resourceImage, x + resourceOffset, y - (size * progress) + size, resourceSize, resourceSize)
                }
                else if (structure.direction === Direction.DOWN)
                {
                    this.canvas.drawImage(resourceImage, x + resourceOffset, y + (size * progress) - resourceSize, resourceSize, resourceSize)
                }
            }

            //this.canvas.fillStyle = 'red';
            //this.canvas.font = '20px Courier';
            //this.canvas.fillText(structure.resources.length, x + (size / 3), y + (size / 1.5));
        }
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