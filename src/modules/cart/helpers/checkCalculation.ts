import priceParse from "../../../helpers/priceParse"
import {IBookCart} from "../../../types/bookTypes"

const checkCalculation = (cart: IBookCart[]) => {
	const sum = cart.reduce(
		(acc, curr) => acc + priceParse(curr.price) * curr.count,
		0
	)

	const vat = sum * 0.18
	const total = sum + vat

	return {
		sum: sum.toFixed(2),
		vat: vat.toFixed(2),
		total: total.toFixed(2),
	}
}

export default checkCalculation