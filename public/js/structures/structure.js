class Structure
{
    x = 0
    y = 0
    direction = ''
    type = ''
    directionalStructure = null

    static TYPE_HEADQUARTERS = 'structure.headquarters' // in
    static TYPE_RESEARCH_LAB = 'structure.researchLab'

    static TYPE_CONNECTION_CONVEYOR = 'structure.connection.conveyor' // in | out
    static TYPE_CONNECTION_JUNCTION = 'structure.connection.junction' // in | out
    static TYPE_CONNECTION_ROUTER = 'structure.connection.router' // in | out
    static TYPE_CONNECTION_SORTER = 'structure.connection.sorter' // in | out
    static TYPE_CONNECTION_OVERFLOW = 'structure.connection.overflow' // in | out

    static TYPE_FACTORY_GEAR = 'structure.factory.gear' // in | out
    static TYPE_FACTORY_ENGINE = 'structure.factory.engine' // in | out
    static TYPE_FACTORY_BATTERY = 'structure.factory.battery' // in | out

    static TYPE_MINE_COAL = 'structure.mine.coal' // out
    static TYPE_MINE_IRON = 'structure.mine.iron' // out
    static TYPE_MINE_COPPER = 'structure.mine.copper' // out
    static TYPE_MINE_STONE = 'structure.mine.stone' // out

    static TYPE_TURRET_LIGHT = 'structure.turret.light' // in
    static TYPE_TURRET_HEAVY = 'structure.turret.heavy' // in
    static TYPE_TURRET_CANNON = 'structure.turret.cannon' // in
    static TYPE_TURRET_LASER = 'structure.turret.laser' // in
    static TYPE_TURRET_PLASMA = 'structure.turret.plasma' // in

    static TYPE_WALL_STONE = 'structure.wall.stone'
    static TYPE_WALL_IRON = 'structure.wall.iron'
    static TYPE_WALL_STEAL = 'structure.wall.steal'

    static TYPE_POWER_SOLAR = 'structure.power.solar'
    static TYPE_POWER_WIND = 'structure.power.wind'
    static TYPE_POWER_COAL = 'structure.power.coal'

    constructor(x, y, type, direction = '')
    {
        this.x = x
        this.y = y
        this.type = type
        this.direction = direction
    }

    acceptResource()
    {
        return false
    }

    isConveyor()
    {
        return false
    }

    moveResource(resource)
    {
        return (this.directionalStructure && this.directionalStructure.acceptResource(resource, Direction.opposite(this.direction)))
    }

    setDirectionalStructure(structure)
    {
        if (this.type == Structure.TYPE_CONNECTION_CONVEYOR)
        {
            this.directionalStructure = structure
        }
        else if ((this.type == Structure.TYPE_MINE_COAL) ||
            (this.type == Structure.TYPE_MINE_IRON) ||
            (this.type == Structure.TYPE_MINE_COPPER) ||
            (this.type == Structure.TYPE_MINE_STONE))
        {
            this.directionalStructure = structure
        }
    }

    angle()
    {
        switch (this.direction)
        {
            case Direction.UP:
                return 0

            case Direction.RIGHT:
                return 90

            case Direction.DOWN:
                return 180

            case Direction.LEFT:
                return 270

            default:
                return 0
        }
    }
}