class Map
{
    fields = []
    patches = []
    buildings = []
    width = 0
    height = 0

    load()
    {
        const loadedMap = defaultMap()

        this.width = loadedMap.width
        this.height = loadedMap.height

        this.buildings = loadedMap.buildings.map(Building.fromJson)
        this.fields = loadedMap.fields.map(Field.fromJson)
        this.patches = loadedMap.patches.map(Patch.fromJson)
    }
}

function defaultMap()
{
    const width = 30
    const height = 20
    const fields = []

    for (let x = 0; x < width; x++)
    {
        for (let y = 0; y < height; y++)
        {
            fields.push({ x: x, y: y, type: Field.TYPE_GRASS })
        }
    }

    const json = {
        version: '1',
        width: width,
        height: height,
        fields: fields,
        patches: [
            { x: 1, y: 6, type: Patch.TYPE_COAL, value: 1000 },
            { x: 2, y: 6, type: Patch.TYPE_COAL, value: 1000 },
            { x: 1, y: 7, type: Patch.TYPE_COAL, value: 1000 },
            { x: 2, y: 7, type: Patch.TYPE_COAL, value: 1000 },
            { x: 1, y: 8, type: Patch.TYPE_COAL, value: 1000 },
            { x: 2, y: 8, type: Patch.TYPE_COAL, value: 1000 }
        ],
        buildings: [
            { x: 5, y: 5, type: Building.TYPE_HEADQUARTERS },
            { x: 2, y: 7, type: Building.TYPE_MINE_COAL },
            { x: 3, y: 7, type: Building.TYPE_CONVEYOR_RIGHT },
            { x: 4, y: 7, type: Building.TYPE_CONVEYOR_RIGHT },
            { x: 5, y: 7, type: Building.TYPE_CONVEYOR_RIGHT },
            { x: 5, y: 6, type: Building.TYPE_CONVEYOR_RIGHT },
        ]
    }

    return json
}