class Resource {
    x = 0
    y = 0
    type = ''
    value = 0

    static TYPE_COAL = 'coal'

    constructor(x, y, type, value) {
        this.x = x
        this.y = y
        this.type = type
        this.value = value
    }
}