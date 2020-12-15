class MineCoal extends Structure
{
    constructor(x, y, direction)
    {
        super(x, y, Structure.TYPE_MINE_COAL, direction)
    }

    update(delta)
    {
        console.log(delta)
    }
}