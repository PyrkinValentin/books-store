import {FC} from "react"

import classNames from "../../helpers/classNames"
import {PosterProps} from "./types/PosterTypes"

import styles from "./styles/Poster.module.scss"

const Poster: FC<PosterProps> = ({image, alt, className}) => {
	return (
		<img
			src={image}
			alt={alt}
			className={classNames(styles.image, className)}
		/>
	)
}

export default Poster