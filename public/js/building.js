class Building {
    x = 0
    y = 0
    type = ''

    static TYPE_CONVEYOR = 'conveyor'
    static TYPE_COAL_MINE = 'coal.mine'
    static TYPE_HEADQUARTERS = 'headquarters'

    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type
    }
}