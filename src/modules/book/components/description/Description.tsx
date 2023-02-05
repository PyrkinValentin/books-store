import {FC} from "react"

import Rating from "../../../../ui/rating/Rating"
import checkPriceFree from "../../../../helpers/checkPriceFree"

import {DescriptionProps} from "./types/DescriptionTypes"
import styles from "./styles/Description.module.scss"

const Description: FC<DescriptionProps> = (props) => {
	const isPriceFree = checkPriceFree(props.price)

	return (
		<>
			<div className={styles.desc__wrapper}>
				<h3 className={styles.desc__wrapper__price}>
					{isPriceFree ? 'Free' : props.price}
				</h3>

				<p><Rating rating={props.rating}/></p>
			</div>

			<div className={styles.desc__item}>
				<h3 className={styles.desc__item__title}>Authors</h3>
				<p className={styles.desc__item__description}>{props.authors}</p>
			</div>

			<div className={styles.desc__item}>
				<h3 className={styles.desc__item__title}>Publisher</h3>
				<p className={styles.desc__item__description}>{props.publisher}, {props.year}</p>
			</div>

			<div className={styles.desc__item}>
				<h3 className={styles.desc__item__title}>Language</h3>
				<p className={styles.desc__item__description}>{props.language}</p>
			</div>

			<div className={styles.desc__item}>
				<h3 className={styles.desc__item__title}>Format</h3>
				<p className={styles.desc__item__description}>Paper book / ebook (PDF)</p>
			</div>
		</>
	)
}

export default Description