class Grid {
    canvas = null
    map = null
    width = 0
    height = 0
    cellSize = 0
    startX = 0
    startY = 0

    constructor(canvas, map) {
        this.canvas = canvas.getContext('2d')
        this.map = map
        this.width = canvas.width
        this.height = canvas.height
        this.cellSize = parseInt(this.height / map.height)
        this.startX = (this.width / 2) - (map.width * this.cellSize / 2)
        this.startY = (this.height / 2) - (map.height * this.cellSize / 2)

        canvas.addEventListener('click', e => {
            this.onCanvasClick(e)
        })

        canvas.addEventListener('contextmenu', e => {
            e.preventDefault()
            this.onCanvasClick(e)
        })
    }

    render() {
        this.renderBackground()

        this.map.fields.forEach(field => {
            this.renderField(field)
        })

        this.map.resources.forEach(resource => {
            this.renderResource(resource)
        })

        this.map.buildings.forEach(building => {
            this.renderBuilding(building)
        })
    }

    renderBackground() {
        this.canvas.fillStyle = '#111111'
        this.canvas.fillRect(0, 0, this.width, this.height)
    }

    renderField(field) {
        let image = document.getElementById('img.' + field.type)
        this.canvas.drawImage(image,
            this.tileX(field),
            this.tileY(field),
            this.cellSize,
            this.cellSize
        )
    }

    renderResource(resource) {
        let image = document.getElementById('img.' + resource.type)
        this.canvas.drawImage(image,
            this.tileX(resource),
            this.tileY(resource),
            this.cellSize,
            this.cellSize
        )
    }

    renderBuilding(building) {
        let image = document.getElementById('img.' + building.type)
        this.canvas.drawImage(image,
            this.tileX(building),
            this.tileY(building),
            this.cellSize,
            this.cellSize
        )
    }

    tileX(tile) {
        return this.startX + (tile.x * this.cellSize)
    }

    tileY(tile) {
        return this.startY + (tile.y * this.cellSize)
    }

    onCanvasClick(e) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        for (let i = 0; i < this.map.buildings.length; i++) {
            let building = this.map.buildings[i]
            let left = this.tileX(building)
            let right = left + this.cellSize
            let top = this.tileY(building)
            let bottom = top + this.cellSize

            if ((x >= left) && (x <= right) && (y >= top) && (y <= bottom)) {
                this.onBuildingClick(building)
                break
            }
        }
    }

    onBuildingClick(building) {
        console.log('Building clicked: ' + building.x + ',' + building.y)
    }
}