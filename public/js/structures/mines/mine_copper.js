class MineCopper extends Mine
{
    static MINING_TIME = 1000

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_COPPER, direction, MineCoal.MINING_TIME)
    }
}