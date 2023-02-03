import {FC} from "react"

import Icon from "../icon/Icon"

import createRating from "./helpers/createRating"
import {RatingProps} from "./types/RatingTypes"

import styles from "./styles/Rating.module.scss"

const Rating: FC<RatingProps> = (props) => {
	const rating = createRating(props.rating)

	return (
		<>
			{rating.map((lvl, index) =>
				<span key={index}>
					<Icon
						name={'star'}
						className={lvl ? undefined : styles.star__disabled}
					/>
				</span>
			)}
		</>
	)
}

export default Rating