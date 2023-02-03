import {FC} from "react"

import Rating from "../../../ui/rating/Rating"

import classNames from "../../../helpers/classNames"
import {BookDescriptionProps} from "./types/BookDescriptionTypes"

import styles from "./styles/BookDescription.module.scss"

const BookDescription: FC<BookDescriptionProps> = ({price, rating, authors, publisher, language}) => {
	return (
		<>
			<div className={classNames(styles.info__item, styles.info__item_gap)}>
				<h3 className={styles.info__item__price}>{price}</h3>
				<p><Rating rating={rating}/></p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Authors</h3>
				<p className={styles.info__item__right}>{authors}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Publisher</h3>
				<p className={styles.info__item__right}>{publisher}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Language</h3>
				<p className={styles.info__item__right}>{language}</p>
			</div>

			<div className={styles.info__item}>
				<h3 className={styles.info__item__left}>Format</h3>
				<p className={styles.info__item__right}>Paper book / ebook (PDF)</p>
			</div>
		</>
	)
}

export default BookDescription