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
            else if (json.type === Structure.TYPE_MINE_COPPER)
            {
                return new MineCopper(
                    json.x,
                    json.y,
                    json.direction
                )
            }
            else if (json.type === Structure.TYPE_MINE_IRON)
            {
                return new MineIron(
                    json.x,
                    json.y,
                    json.direction
                )
            }
            else if (json.type === Structure.TYPE_MINE_STONE)
            {
                return new MineStone(
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
                { x: 2, y: 8, type: Patch.TYPE_COAL, value: 1000 },

                { x: 4, y: 15, type: Patch.TYPE_COPPER, value: 1000 },
                { x: 5, y: 15, type: Patch.TYPE_COPPER, value: 1000 },
                { x: 4, y: 16, type: Patch.TYPE_COPPER, value: 1000 },
                { x: 5, y: 16, type: Patch.TYPE_COPPER, value: 1000 },
                { x: 4, y: 17, type: Patch.TYPE_COPPER, value: 1000 },
                { x: 5, y: 17, type: Patch.TYPE_COPPER, value: 1000 },

                { x: 23, y: 12, type: Patch.TYPE_IRON, value: 1000 },
                { x: 24, y: 12, type: Patch.TYPE_IRON, value: 1000 },
                { x: 23, y: 13, type: Patch.TYPE_IRON, value: 1000 },
                { x: 24, y: 13, type: Patch.TYPE_IRON, value: 1000 },
                { x: 23, y: 14, type: Patch.TYPE_IRON, value: 1000 },
                { x: 24, y: 14, type: Patch.TYPE_IRON, value: 1000 },

                { x: 20, y: 3, type: Patch.TYPE_STONE, value: 1000 },
                { x: 21, y: 3, type: Patch.TYPE_STONE, value: 1000 },
                { x: 20, y: 4, type: Patch.TYPE_STONE, value: 1000 },
                { x: 21, y: 4, type: Patch.TYPE_STONE, value: 1000 },
                { x: 20, y: 5, type: Patch.TYPE_STONE, value: 1000 },
                { x: 21, y: 5, type: Patch.TYPE_STONE, value: 1000 },
            ],
            structures: [
                { x: 14, y: 10, type: Structure.TYPE_HEADQUARTERS, direction: Direction.UP },

                { x: 2, y: 7, type: Structure.TYPE_MINE_COAL, direction: Direction.RIGHT },
                { x: 5, y: 15, type: Structure.TYPE_MINE_COPPER, direction: Direction.UP },
                { x: 23, y: 13, type: Structure.TYPE_MINE_IRON, direction: Direction.LEFT },
                { x: 20, y: 5, type: Structure.TYPE_MINE_STONE, direction: Direction.DOWN },

                { x: 3, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 4, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 5, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 6, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 7, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 7, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 7, y: 9, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 7, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 8, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 9, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 10, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 11, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 12, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 13, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },

                { x: 20, y: 6, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 20, y: 7, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 20, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 19, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 18, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 17, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 16, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 15, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 14, y: 8, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },
                { x: 14, y: 9, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.DOWN },

                { x: 5, y: 14, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 5, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 5, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 6, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 7, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 8, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 9, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 10, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 11, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 12, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 13, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.RIGHT },
                { x: 14, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 14, y: 11, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },

                { x: 22, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 21, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 20, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 19, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 18, y: 13, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 18, y: 12, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 18, y: 11, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.UP },
                { x: 18, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 17, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 16, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
                { x: 15, y: 10, type: Structure.TYPE_CONNECTION_CONVEYOR, direction: Direction.LEFT },
            ]
        }

        return json
    }
}