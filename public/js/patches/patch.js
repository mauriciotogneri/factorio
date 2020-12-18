class Patch
{
    x = 0
    y = 0
    type = ''
    value = 0

    static TYPE_COAL = 'patch.coal'
    static TYPE_COPPER = 'patch.copper'
    static TYPE_IRON = 'patch.iron'
    static TYPE_STONE = 'patch.stone'

    constructor(x, y, type, value)
    {
        this.x = x
        this.y = y
        this.type = type
        this.value = value
    }
}