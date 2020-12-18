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
            let neighborDirection = this.neighborAt(structure.direction, structure.x, structure.y)
            structure.setDirectionalStructure(neighborDirection)

            let neighborUp = this.neighborAt(Direction.UP, structure.x, structure.y)
            let neighborDown = this.neighborAt(Direction.DOWN, structure.x, structure.y)
            let neighborLeft = this.neighborAt(Direction.LEFT, structure.x, structure.y)
            let neighborRight = this.neighborAt(Direction.RIGHT, structure.x, structure.y)
            structure.setNeighbors(neighborUp, neighborDown, neighborLeft, neighborRight)
        }
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