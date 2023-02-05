import {FC} from "react"

import Poster from "../../../../components/poster/Poster"
import Rating from "../../../../ui/rating/Rating"

import checkPriceFree from "../../../../helpers/checkPriceFree"
import {FavoriteCardProps} from "./types/FavoriteCardTypes"

import styles from "./styles/FavoriteCard.module.scss"

const FavoriteCard: FC<FavoriteCardProps> = ({image, title, authors, publisher, year, price, rating}) => {
	return (
		<div className={styles.container}>
			<Poster
				image={image}
				alt={title}
				className={styles.poster}
			/>

			<div>
				<h2 className={styles.title}>
					{title}
				</h2>

				<p className={styles.description}>
					by {authors}, {publisher} {year}
				</p>

				<div className={styles.group}>
					<div className={styles.price}>
						{checkPriceFree(price) ? 'FREE' : price}
					</div>

					<div>
						<Rating
							rating={rating}
							widthStar={12}
							heightStar={12}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FavoriteCard