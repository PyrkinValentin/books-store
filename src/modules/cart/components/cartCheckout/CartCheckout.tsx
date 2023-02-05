import {FC} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import Button from "../../../../ui/button/Button"

import {removeCart} from "../../../../store/slices/cartSlice"
import checkCalculation from "../../helpers/checkCalculation"

import {CartCheckoutProps} from "./types/CartCheckoutTypes"
import styles from "./styles/CartCheckout.module.scss"

const CartCheckout: FC<CartCheckoutProps> = ({cart}) => {
	const dispatch = useAppDispatch()

	const handlePurchase = () => {
		dispatch(
			removeCart()
		)
	}

	const {sum, vat, total} = checkCalculation(cart)

	return (
		<div className={styles.check}>
			<ul className={styles.check__list}>
				<li className={styles.check__list__calc}>
					<h3>Sum total</h3>
					<p>$ {sum}</p>
				</li>

				<li className={styles.check__list__calc}>
					<h3>VAT</h3>
					<p>$ {vat}</p>
				</li>

				<li className={styles.check__list__total}>
					<h3>Total:</h3>
					<p>$ {total}</p>
				</li>
			</ul>

			<Button onClick={handlePurchase}>CHECK OUT</Button>
		</div>
	)
}

export default CartCheckout