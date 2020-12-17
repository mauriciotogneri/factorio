class Conveyor extends Structure
{
    resources = []

    static MAX_ITEMS = 4

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_CONNECTION_CONVEYOR, direction)
    }

    update(delta)
    {
    }

    acceptResource(resource, fromDirection)
    {
        const accepted = (this.resources.length < Conveyor.MAX_ITEMS) && (this.direction !== fromDirection)

        if (accepted)
        {
            this.resources.unshift(resource)
        }

        return accepted
    }
}