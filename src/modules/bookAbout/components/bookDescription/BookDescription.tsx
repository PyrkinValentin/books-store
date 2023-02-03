import {FC} from "react"

import Rating from "../../../../ui/rating/Rating"

import classNames from "../../../../helpers/classNames"
import checkPriceFree from "../../../../helpers/checkPriceFree"

import {BookDescriptionProps} from "./types/BookDescriptionTypes"
import styles from "./styles/BookDescription.module.scss"

const BookDescription: FC<BookDescriptionProps> = (props) => {
	const isPriceFree = checkPriceFree(props.price)

	return (
		<>
			<div className={classNames(styles.info__item, styles.info__item_gap)}>
				<h3 className={styles.info__item__price}>
					{isPriceFree ? 'Free' : props.price}
				</h3>

				<p><Rating rating={props.rating}/></p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Authors</h3>
				<p className={styles.info__item__right}>{props.authors}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Publisher</h3>
				<p className={styles.info__item__right}>{props.publisher}, {props.year}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Language</h3>
				<p className={styles.info__item__right}>{props.language}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Format</h3>
				<p className={styles.info__item__right}>Paper book / ebook (PDF)</p>
			</div>
		</>
	)
}

export default BookDescription