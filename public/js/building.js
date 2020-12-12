class Building
{
    x = 0
    y = 0
    type = ''

    static TYPE_CONVEYOR_RIGHT = 'conveyor.right'
    static TYPE_MINE_COAL = 'building.mine.coal'
    static TYPE_HEADQUARTERS = 'building.headquarters'

    constructor(x, y, type)
    {
        this.x = x
        this.y = y
        this.type = type
    }

    static fromJson(json)
    {
        return new Building(
            json.x,
            json.y,
            json.type
        )
    }
}