class Map {
    fields = []
    resources = []
    buildings = []
    width = 0
    height = 0

    load() {
        const loadedMap = defaultMap()

        this.width = loadedMap.width
        this.height = loadedMap.height

        this.buildings = loadedMap.buildings.map(Building.fromJson)
        this.fields = loadedMap.fields.map(Field.fromJson)
        this.resources = loadedMap.resources.map(Resource.fromJson)
    }
}

function defaultMap() {
    const width = 20
    const height = 20

    const fields = []

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            fields.push({ x: x, y: y, type: 'grass' })
        }
    }

    const json = {
        version: '1',
        width: width,
        height: height,
        fields: fields,
        resources: [
            { x: 1, y: 6, type: 'coal', value: 1000 },
            { x: 2, y: 6, type: 'coal', value: 1000 },
            { x: 1, y: 7, type: 'coal', value: 1000 },
            { x: 2, y: 7, type: 'coal', value: 1000 },
            { x: 1, y: 8, type: 'coal', value: 1000 },
            { x: 2, y: 8, type: 'coal', value: 1000 }
        ],
        buildings: [
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