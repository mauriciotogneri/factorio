class Structure
{
    x = 0
    y = 0
    direction = ''
    type = ''

    static TYPE_HEADQUARTERS = 'structure.headquarters'
    static TYPE_RESEARCH_LAB = 'structure.researchLab'

    static TYPE_CONNECTION_CONVEYOR = 'structure.connection.conveyor'
    static TYPE_CONNECTION_JUNCTION = 'structure.connection.junction'
    static TYPE_CONNECTION_ROUTER = 'structure.connection.router'
    static TYPE_CONNECTION_SORTER = 'structure.connection.sorter'
    static TYPE_CONNECTION_OVERFLOW = 'structure.connection.overflow'

    static TYPE_MINE_COAL = 'structure.mine.coal'
    static TYPE_MINE_IRON = 'structure.mine.iron'
    static TYPE_MINE_COPPER = 'structure.mine.copper'
    static TYPE_MINE_STONE = 'structure.mine.stone'

    static TYPE_FACTORY_GEAR = 'structure.factory.gear'
    static TYPE_FACTORY_ENGINE = 'structure.factory.engine'
    static TYPE_FACTORY_BATTERY = 'structure.factory.battery'

    static TYPE_POWER_SOLAR = 'structure.power.solar'
    static TYPE_POWER_WIND = 'structure.power.wind'
    static TYPE_POWER_COAL = 'structure.power.coal'

    static TYPE_TURRET_LIGHT = 'structure.turret.light'
    static TYPE_TURRET_HEAVY = 'structure.turret.heavy'
    static TYPE_TURRET_CANNON = 'structure.turret.cannon'
    static TYPE_TURRET_LASER = 'structure.turret.laser'
    static TYPE_TURRET_PLASMA = 'structure.turret.plasma'

    static TYPE_WALL_stone = 'structure.wall.stone'
    static TYPE_WALL_iron = 'structure.wall.iron'
    static TYPE_WALL_steal = 'structure.wall.steal'

    constructor(x, y, direction, type)
    {
        this.x = x
        this.y = y
        this.direction = direction
        this.type = type
    }

    angle()
    {
        switch (this.direction)
        {
            case Direction.UP:
                return 0;

            case Direction.RIGHT:
                return 90;

            case Direction.DOWN:
                return 180;

            case Direction.LEFT:
                return 270;
        }
    }
}