class Map {
    nodes = []

    static NODES_HORIZONTAL = 35
    static NODES_VERTICAL = 25

    constructor() {
        for (let x = 0; x < Map.NODES_HORIZONTAL; x++) {
            for (let y = 0; y < Map.NODES_VERTICAL; y++) {
                let node = new Node(x, y)
                this.nodes.push(node)
            }
        }
    }
}