class Map
{
    width = 0
    height = 0
    fields = []
    patches = []
    structures = []

    constructor(width, height, fields, patches, structures)
    {
        this.width = width
        this.height = height
        this.fields = fields
        this.patches = patches
        this.structures = structures
    }

    update(delta)
    {
        for (let structure of this.structures)
        {
            structure.update(delta)
        }
    }

    connect()
    {
        for (let structure of this.structures)
        {
            let neighbor = this.neighborAt(structure.direction, structure.x, structure.y)

            if (neighbor)
            {
                structure.setDirectionalStructure(neighbor)
            }
        }

        console.log()
    }

    neighborAt(direction, x, y)
    {
        switch (direction)
        {
            case Direction.UP:
                return this.structureAt(x, y - 1)

            case Direction.RIGHT:
                return this.structureAt(x + 1, y)

            case Direction.DOWN:
                return this.structureAt(x, y + 1)

            case Direction.LEFT:
                return this.structureAt(x - 1, y)

            default:
                return null
        }
    }

    structureAt(x, y)
    {
        for (let structure of this.structures)
        {
            if ((structure.x === x) && (structure.y === y))
            {
                return structure
            }
        }

        return null
    }
}