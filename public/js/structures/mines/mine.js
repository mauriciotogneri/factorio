class Mine extends Structure
{
    miningTime = 0
    accumulatedTime = 0
    buffer = null

    // Health: 150
    // Energy consumption: 15

    constructor(x, y, type, direction, miningTime)
    {
        super(x, y, type, direction)

        this.miningTime = miningTime
    }

    update(delta)
    {
        if (this.buffer === null)
        {
            this.accumulatedTime += delta

            if (this.accumulatedTime >= this.miningTime)
            {
                this.accumulatedTime -= this.miningTime

                const resource = this.createResource()

                if (this.moveResource(resource))
                {
                    this.buffer = null
                }
                else
                {
                    this.buffer = resource
                }
            }
        }
    }

    createResource()
    {
        switch (this.type)
        {
            case Structure.TYPE_MINE_COAL:
                return Resource.coal()

            case Structure.TYPE_MINE_COPPER:
                return Resource.copper()

            case Structure.TYPE_MINE_IRON:
                return Resource.iron()

            case Structure.TYPE_MINE_STONE:
                return Resource.stone()
        }
    }
}