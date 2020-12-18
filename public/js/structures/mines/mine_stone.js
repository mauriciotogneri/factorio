class MineStone extends Mine
{
    static MINING_TIME = 1000

    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_STONE, direction, MineCoal.MINING_TIME)
    }
}