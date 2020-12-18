class MineCoal extends Mine
{
    static MINING_TIME = 1000

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_COAL, direction, MineCoal.MINING_TIME)
    }
}