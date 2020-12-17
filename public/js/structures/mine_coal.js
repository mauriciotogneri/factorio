class MineCoal extends Structure
{
    static MINING_TIME = 1000

    accumulatedTime = 0
    buffer = null

    // Health: 150
    // Energy consumption: 15

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_COAL, direction)
    }

    update(delta)
    {
        if (this.buffer === null)
        {
            this.accumulatedTime += delta

            if (this.accumulatedTime >= MineCoal.MINING_TIME)
            {
                this.accumulatedTime -= MineCoal.MINING_TIME

                const resource = Resource.coal()

                if (this.directionalStructure && this.directionalStructure.acceptResource(resource, Direction.opposite(this.direction)))
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
}