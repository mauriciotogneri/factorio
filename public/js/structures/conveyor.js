class Conveyor extends Structure
{
    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_CONNECTION_CONVEYOR, direction)
    }

    update(delta)
    {
        console.log(delta)
    }

    acceptResource(type, fromDirection)
    {
        return (type === Resource.TYPE_COAL) && (Direction.opposite(this.direction) === fromDirection)
    }
}