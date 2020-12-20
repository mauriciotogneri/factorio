class Resource
{
    type = ''

    static TYPE_COAL = 'coal'
    static TYPE_COPPER = 'copper'
    static TYPE_IRON = 'iron'
    static TYPE_STONE = 'stone'

    constructor(type)
    {
        this.type = type
    }

    static coal()
    {
        return new Resource(Resource.TYPE_COAL)
    }

    static copper()
    {
        return new Resource(Resource.TYPE_COPPER)
    }

    static iron()
    {
        return new Resource(Resource.TYPE_IRON)
    }

    static stone()
    {
        return new Resource(Resource.TYPE_STONE)
    }
}