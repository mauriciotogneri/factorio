class Building
{
    x = 0
    y = 0
    direction = ''
    type = ''

    static TYPE_CONVEYOR = 'building.conveyor'
    static TYPE_MINE_COAL = 'building.mine.coal'
    static TYPE_HEADQUARTERS = 'building.headquarters'

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