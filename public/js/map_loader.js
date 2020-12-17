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
                json.structures.map(structure => this.loadStructure(version, structure)),
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

    loadStructure(version, json)
    {
        if (version === MapVersion.V1)
        {
            if (json.type === Structure.TYPE_HEADQUARTERS)
            {
                return new Headquarters(
                    json.x,
                    json.y
                )
            }
            else if (json.type === Structure.TYPE_MINE_COAL)
            {
                return new MineCoal(
                    json.x,
                    json.y,
                    json.direction
                )
            }
            else if (json.type === Structure.TYPE_CONNECTION_CONVEYOR)
            {
                return new Conveyor(
                    json.x,
                    json.y,
                    json.direction
                )
            }
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
            structures: [
                { x: 2, y: 7, type: Structure.TYPE_MINE_COAL, direction: Direction.RIGHT },
                { x: 3, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 4, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 5, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 6, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 7, y: 7, type: Structure.TYPE_HEADQUARTERS, direction: Direction.UP }
            ]
        }

        return json
    }
}