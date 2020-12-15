class MapLoader
{
    load()
    {
        const json = this.defaultMap()
        const version = json.version

        if (version === MapVersion.V1)
        {
            return new Map(
                json.width,
                json.height,
                json.fields.map(field => this.loadField(version, field)),
                json.patches.map(patch => this.loadPatch(version, patch)),
                json.buildings.map(building => this.loadBuilding(version, building)),
            )
        }
    }

    loadField(version, json)
    {
        if (version === MapVersion.V1)
        {
            return new Field(
                json.x,
                json.y,
                json.type
            )
        }
    }

    loadPatch(version, json)
    {
        if (version === MapVersion.V1)
        {
            return new Patch(
                json.x,
                json.y,
                json.type,
                json.value
            )
        }
    }

    loadBuilding(version, json)
    {
        if (version === MapVersion.V1)
        {
            return new Building(
                json.x,
                json.y,
                json.direction,
                json.type
            )
        }
    }

    defaultMap()
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
                { x: 5, y: 5, direction: Direction.UP, type: Building.TYPE_HEADQUARTERS },
                { x: 2, y: 7, direction: Direction.RIGHT, type: Building.TYPE_MINE_COAL },
                { x: 3, y: 7, direction: Direction.RIGHT, type: Building.TYPE_CONVEYOR },
                { x: 4, y: 7, direction: Direction.RIGHT, type: Building.TYPE_CONVEYOR },
                { x: 5, y: 7, direction: Direction.UP, type: Building.TYPE_CONVEYOR },
                { x: 5, y: 6, direction: Direction.UP, type: Building.TYPE_CONVEYOR },
            ]
        }

        return json
    }
}