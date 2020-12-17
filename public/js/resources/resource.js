class Resource
{
    type = ''

    static TYPE_COAL = 'coal'

    constructor(type)
    {
        this.type = type
    }

    isCoal()
    {
        return (this.type === TYPE_COAL)
    }

    static coal()
    {
        return new Resource(Resource.TYPE_COAL)
    }
}