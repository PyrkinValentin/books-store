import useAppSelector from "../../hooks/useAppSelector"

import Warning from "../../components/warning/Warning"
import Poster from "../../components/poster/Poster"
import CartCounter from "./components/cartCounter/CartCounter"
import CartRemove from "./components/cartRemove/CartRemove"
import CartCheckout from "./components/cartCheckout/CartCheckout"

import checkPriceFree from "../../helpers/checkPriceFree"

import styles from "./styles/Cart.module.scss"

const Cart = () => {
	const cart = useAppSelector((state) => state.cartReducer.cart)

	if (!cart.length) {
		return (
			<Warning text={'No books in your cart'}/>
		)
	}

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

			<CartCheckout cart={cart}/>
		</>
	)
}

export default Cart