class Field {
    x = 0
    y = 0
    type = ''

    static TYPE_GRASS = 'grass'

    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type
    }

    static fromJson(json) {
        return new Field(
            json.x,
            json.y,
            json.type
        )
    }
}