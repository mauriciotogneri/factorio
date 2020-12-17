class Direction
{
    static UP = 'up'
    static DOWN = 'down'
    static LEFT = 'left'
    static RIGHT = 'right'

    static opposite(direction)
    {
        switch (direction)
        {
            case Direction.UP:
                return Direction.DOWN

            case Direction.RIGHT:
                return Direction.LEFT

            case Direction.DOWN:
                return Direction.UP

            case Direction.LEFT:
                return Direction.RIGHT

            default:
                return direction
        }
    }
}

class MapVersion
{
    static V1 = '1'
}