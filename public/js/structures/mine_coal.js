class MineCoal extends Structure
{
    static MINING_TIME = 1000

    accumulatedTime = 0
    buffer = 0

    // Health: 150
    // Energy consumption: 15

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_COAL, direction)
    }

    update(delta)
    {
        if (this.buffer === 0)
        {
            this.accumulatedTime += delta

            if (this.accumulatedTime >= MineCoal.MINING_TIME)
            {
                this.accumulatedTime -= MineCoal.MINING_TIME

                if (this.directionalStructure && this.directionalStructure.acceptResource(Resource.TYPE_COAL, Direction.opposite(this.direction)))
                {
                    this.buffer = 0
                }
                else
                {
                    this.buffer = 1
                }
            }
        }
    }
}