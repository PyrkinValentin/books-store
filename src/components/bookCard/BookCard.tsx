import {FC} from "react"

import Poster from "../poster/Poster"

import checkPriceFree from "../../helpers/checkPriceFree"
import {BookCardProps} from "./types/BookCardTypes"

import styles from "./styles/BookCard.module.scss"

const BookCard: FC<BookCardProps> = ({book}) => {
	const isPriceFree = checkPriceFree(book.price)

	return (
		<div className={styles.card}>
			<div>
				<Poster
					image={book.image}
					alt={book.title}
					className={styles.card__poster}
				/>

				<h2 className={styles.card__title}>
					{book.title}
				</h2>

				<p className={styles.card__subTitle}>
					{book.subtitle}
				</p>
			</div>

			<h3 className={styles.card__price}>
				{isPriceFree ? 'Free' : book.price}
			</h3>
		</div>
	)
}

export default BookCard