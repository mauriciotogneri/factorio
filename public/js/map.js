class Map {
    fields = []
    resources = []
    nodes = []

    nodesHorizontal = 0
    nodesVertical = 0

    load() {
        const loadedMap = defaultMap()

        this.nodesHorizontal = loadedMap.width
        this.nodesVertical = loadedMap.height

        loadedMap.nodes.forEach(node => {
            this.nodes.push(new Node(
                node.x,
                node.y,
                node.type
            ))
        })

        loadedMap.fields.forEach(field => {
            this.fields.push(new Field(
                field.x,
                field.y,
                field.type
            ))
        })

        loadedMap.resources.forEach(resource => {
            this.resources.push(new Resource(
                resource.x,
                resource.y,
                resource.type,
                resource.value
            ))
        })
    }
}

function defaultMap() {
    const json = {
        version: '1',
        width: 10,
        height: 10,
        fields: [
            { x: 0, y: 0, type: 'grass' },
            { x: 1, y: 0, type: 'grass' },
            { x: 2, y: 0, type: 'grass' },
            { x: 3, y: 0, type: 'grass' },
            { x: 4, y: 0, type: 'grass' },
            { x: 5, y: 0, type: 'grass' },
            { x: 6, y: 0, type: 'grass' },
            { x: 7, y: 0, type: 'grass' },
            { x: 8, y: 0, type: 'grass' },
            { x: 9, y: 0, type: 'grass' },

            { x: 0, y: 1, type: 'grass' },
            { x: 1, y: 1, type: 'grass' },
            { x: 2, y: 1, type: 'grass' },
            { x: 3, y: 1, type: 'grass' },
            { x: 4, y: 1, type: 'grass' },
            { x: 5, y: 1, type: 'grass' },
            { x: 6, y: 1, type: 'grass' },
            { x: 7, y: 1, type: 'grass' },
            { x: 8, y: 1, type: 'grass' },
            { x: 9, y: 1, type: 'grass' },

            { x: 0, y: 2, type: 'grass' },
            { x: 1, y: 2, type: 'grass' },
            { x: 2, y: 2, type: 'grass' },
            { x: 3, y: 2, type: 'grass' },
            { x: 4, y: 2, type: 'grass' },
            { x: 5, y: 2, type: 'grass' },
            { x: 6, y: 2, type: 'grass' },
            { x: 7, y: 2, type: 'grass' },
            { x: 8, y: 2, type: 'grass' },
            { x: 9, y: 2, type: 'grass' },

            { x: 0, y: 3, type: 'grass' },
            { x: 1, y: 3, type: 'grass' },
            { x: 2, y: 3, type: 'grass' },
            { x: 3, y: 3, type: 'grass' },
            { x: 4, y: 3, type: 'grass' },
            { x: 5, y: 3, type: 'grass' },
            { x: 6, y: 3, type: 'grass' },
            { x: 7, y: 3, type: 'grass' },
            { x: 8, y: 3, type: 'grass' },
            { x: 9, y: 3, type: 'grass' },

            { x: 0, y: 4, type: 'grass' },
            { x: 1, y: 4, type: 'grass' },
            { x: 2, y: 4, type: 'grass' },
            { x: 3, y: 4, type: 'grass' },
            { x: 4, y: 4, type: 'grass' },
            { x: 5, y: 4, type: 'grass' },
            { x: 6, y: 4, type: 'grass' },
            { x: 7, y: 4, type: 'grass' },
            { x: 8, y: 4, type: 'grass' },
            { x: 9, y: 4, type: 'grass' },

            { x: 0, y: 5, type: 'grass' },
            { x: 1, y: 5, type: 'grass' },
            { x: 2, y: 5, type: 'grass' },
            { x: 3, y: 5, type: 'grass' },
            { x: 4, y: 5, type: 'grass' },
            { x: 5, y: 5, type: 'grass' },
            { x: 6, y: 5, type: 'grass' },
            { x: 7, y: 5, type: 'grass' },
            { x: 8, y: 5, type: 'grass' },
            { x: 9, y: 5, type: 'grass' },

            { x: 0, y: 6, type: 'grass' },
            { x: 1, y: 6, type: 'grass' },
            { x: 2, y: 6, type: 'grass' },
            { x: 3, y: 6, type: 'grass' },
            { x: 4, y: 6, type: 'grass' },
            { x: 5, y: 6, type: 'grass' },
            { x: 6, y: 6, type: 'grass' },
            { x: 7, y: 6, type: 'grass' },
            { x: 8, y: 6, type: 'grass' },
            { x: 9, y: 6, type: 'grass' },

            { x: 0, y: 7, type: 'grass' },
            { x: 1, y: 7, type: 'grass' },
            { x: 2, y: 7, type: 'grass' },
            { x: 3, y: 7, type: 'grass' },
            { x: 4, y: 7, type: 'grass' },
            { x: 5, y: 7, type: 'grass' },
            { x: 6, y: 7, type: 'grass' },
            { x: 7, y: 7, type: 'grass' },
            { x: 8, y: 7, type: 'grass' },
            { x: 9, y: 7, type: 'grass' },

            { x: 0, y: 8, type: 'grass' },
            { x: 1, y: 8, type: 'grass' },
            { x: 2, y: 8, type: 'grass' },
            { x: 3, y: 8, type: 'grass' },
            { x: 4, y: 8, type: 'grass' },
            { x: 5, y: 8, type: 'grass' },
            { x: 6, y: 8, type: 'grass' },
            { x: 7, y: 8, type: 'grass' },
            { x: 8, y: 8, type: 'grass' },
            { x: 9, y: 8, type: 'grass' },

            { x: 0, y: 9, type: 'grass' },
            { x: 1, y: 9, type: 'grass' },
            { x: 2, y: 9, type: 'grass' },
            { x: 3, y: 9, type: 'grass' },
            { x: 4, y: 9, type: 'grass' },
            { x: 5, y: 9, type: 'grass' },
            { x: 6, y: 9, type: 'grass' },
            { x: 7, y: 9, type: 'grass' },
            { x: 8, y: 9, type: 'grass' },
            { x: 9, y: 9, type: 'grass' }
        ],
        resources: [
            { x: 1, y: 6, type: 'coal', value: 1000 },
            { x: 2, y: 6, type: 'coal', value: 1000 },
            { x: 1, y: 7, type: 'coal', value: 1000 },
            { x: 2, y: 7, type: 'coal', value: 1000 },
            { x: 1, y: 8, type: 'coal', value: 1000 },
            { x: 2, y: 8, type: 'coal', value: 1000 }
        ],
        nodes: [
            { x: 5, y: 5, type: 'headquarters' },
            { x: 2, y: 7, type: 'coal.mine' },
            { x: 3, y: 7, type: 'conveyor' },
            { x: 4, y: 7, type: 'conveyor' },
            { x: 5, y: 7, type: 'conveyor' },
            { x: 5, y: 6, type: 'conveyor' },
        ]
    }

    return json
}