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
        this.cellSize = parseInt(this.height / map.nodesVertical)
        this.startX = (this.width / 2) - (map.nodesHorizontal * this.cellSize / 2)
        this.startY = (this.height / 2) - (map.nodesVertical * this.cellSize / 2)

        canvas.addEventListener('click', e => {
            this.onCanvasClick(e)
        })

        canvas.addEventListener('contextmenu', e => {
            e.preventDefault()
            this.onCanvasClick(e)
        })
    }

    render() {
        this.renderBackfield()
        this.renderFields(this.map.fields)
        this.renderNodes(this.map.nodes)
    }

    renderBackfield() {
        this.canvas.fillStyle = '#1e262c'
        this.canvas.fillRect(0, 0, this.width, this.height)
    }

    renderFields(fields) {
        fields.forEach(field => {
            this.renderNode(field)
        })
    }

    renderNodes(nodes) {
        nodes.forEach(node => {
            this.renderField(node)
        })
    }

    renderNode(node) {
        /*this.canvas.strokeStyle = '#57595b'
        this.canvas.lineWidth = 0.1
        this.canvas.strokeRect(
            this.nodeX(node),
            this.nodeY(node),
            this.cellSize,
            this.cellSize
        )*/

        let image = document.getElementById('img.' + node.type)
        this.canvas.drawImage(image,
            this.tileX(node),
            this.tileY(node),
            this.cellSize,
            this.cellSize
        )
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

        for (let i = 0; i < this.map.nodes.length; i++) {
            let node = this.map.nodes[i]
            let left = this.tileX(node)
            let right = left + this.cellSize
            let top = this.tileY(node)
            let bottom = top + this.cellSize

            if ((x >= left) && (x <= right) && (y >= top) && (y <= bottom)) {
                this.onNodeClick(node)
                break
            }
        }
    }

    onNodeClick(node) {
        console.log('Node clicked: ' + node.x + ',' + node.y)
    }
}