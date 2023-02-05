const randomValue = () => Math.random().toString(36).substring(2, 9)
const createToken = () => `${randomValue()}-${randomValue()}-${randomValue()}-${randomValue()}`

export default createToken