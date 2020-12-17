class Conveyor extends Structure
{
    resources = []
    progress = []

    static MAX_ITEMS = 2
    static MAX_TIME = 1000

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_CONNECTION_CONVEYOR, direction)
    }

    update(delta)
    {
        for (let i = 0; i < this.resources.length; i++)
        {
            this.progress[i] += (delta / Conveyor.MAX_TIME)

            const limit = 1 - (i * (1 / Conveyor.MAX_ITEMS))
            this.progress[i] = Math.min(this.progress[i], limit)

            if (this.progress[i] === 1)
            {
                let resource = this.resources[i]

                if (this.moveResource(resource))
                {
                    this.resources.shift()
                    this.progress.shift()
                }
            }
        }
    }

    acceptResource(resource, fromDirection)
    {
        const accepted = (this.resources.length < Conveyor.MAX_ITEMS) && (this.direction !== fromDirection)

        if (accepted)
        {
            this.resources.push(resource)
            this.progress.push(0)
        }

        return accepted
    }

    isConveyor()
    {
        return true
    }
}