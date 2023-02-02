import {BookCardProps} from "./types/BookCardTypes"
import styles from "./styles/BookCard.module.scss"

const BookCard = ({book}: BookCardProps) => {
	const isPriceFree = book.price.includes('0.00')

	return (
		<div className={styles.card}>
			<div>
				<img
					src={book.image}
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