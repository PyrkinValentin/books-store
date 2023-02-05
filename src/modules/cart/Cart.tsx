import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import Warning from "../../components/warning/Warning"
import Poster from "../../components/poster/Poster"
import CartCounter from "./components/cartCounter/CartCounter"
import CartRemove from "./components/cartRemove/CartRemove"
import Button from "../../ui/button/Button"

import {removeCart} from "../../store/slices/cartSlice"
import checkPriceFree from "../../helpers/checkPriceFree"
import checkCalculation from "./helpers/checkCalculation"

import styles from "./styles/Cart.module.scss"

const Cart = () => {
	const dispatch = useAppDispatch()
	const cart = useAppSelector((state) => state.cartReducer.cart)

	if (!cart.length) {
		return (
			<Warning text={'No books in your cart'}/>
		)
	}

	const handlePurchase = () => {
		dispatch(
			removeCart()
		)
	}

	const {sum, vat, total} = checkCalculation(cart)

	return (
		<>
			<ul className={styles.container}>
				{cart.map((book) => {
					const isPriceFree = checkPriceFree(book.price)

					return (
						<li key={book.isbn13} className={styles.cart}>
							<div className={styles.wrapper}>
								<Poster
									image={book.image}
									alt={book.title}
									className={styles.poster}
								/>

								<div className={styles.info}>
									<div>
										<h2 className={styles.title}>
											{book.title}
										</h2>

										<p className={styles.description}>
											{book.authors}, {book.publisher} {book.year}
										</p>
									</div>

									<CartCounter
										isbn13={book.isbn13}
										count={book.count}
									/>
								</div>
							</div>

							<div className={styles.control}>
								<div className={styles.price}>
									{isPriceFree ? 'Free' : book.price}
								</div>

								<CartRemove isbn13={book.isbn13}/>
							</div>
						</li>
					)
				})}
			</ul>

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
		</>
	)
}

export default Cart