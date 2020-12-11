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
        this.cellSize = parseInt(this.height / Map.NODES_VERTICAL)
        this.startX = (this.width / 2) - (Map.NODES_HORIZONTAL * this.cellSize / 2)
        this.startY = (this.height / 2) - (Map.NODES_VERTICAL * this.cellSize / 2)

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
        this.renderNodes(this.map.nodes)
    }

    renderBackground() {
        this.canvas.fillStyle = '#1e262c'
        this.canvas.fillRect(0, 0, this.width, this.height)
    }

    renderNodes(nodes) {
        nodes.forEach(node => {
            this.renderNode(node)
        })
    }

    renderNode(node) {
        this.canvas.strokeStyle = '#57595b'
        this.canvas.lineWidth = 0.1
        /*this.canvas.strokeRect(
            this.nodeX(node),
            this.nodeY(node),
            this.cellSize,
            this.cellSize
        )*/

        let image = document.getElementById('img.tile')
        this.canvas.drawImage(image,
            this.nodeX(node),
            this.nodeY(node),
            this.cellSize,
            this.cellSize
        )
    }

    nodeX(node) {
        return this.startX + (node.x * this.cellSize)
    }

    nodeY(node) {
        return this.startY + (node.y * this.cellSize)
    }

    onCanvasClick(e) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        for (let i = 0; i < this.map.nodes.length; i++) {
            let node = this.map.nodes[i]
            let left = this.nodeX(node)
            let right = left + this.cellSize
            let top = this.nodeY(node)
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