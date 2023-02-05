import {FC} from "react"

import Icon from "../icon/Icon"

import createRating from "./helpers/createRating"
import {RatingProps} from "./types/RatingTypes"

import styles from "./styles/Rating.module.scss"

const Rating: FC<RatingProps> = ({rating, widthStar, heightStar}) => {
	const createdRating = createRating(rating)

	return (
		<>
			{createdRating.map((lvl, index) =>
				<span key={index}>
					<Icon
						name={'star'}
						className={lvl ? undefined : styles.star__disabled}
						width={widthStar}
						height={heightStar}
					/>
				</span>
			)}
		</>
	)
}

export default Rating