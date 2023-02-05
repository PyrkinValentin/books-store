const priceParse = (price: string): number => (
	Number(price.replace('$', ''))
)

export default priceParse