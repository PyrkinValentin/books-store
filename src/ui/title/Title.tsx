import classNames from "../../helpers/classNames"
import {TitleProps} from "./types/TitleTypes"

import styles from "./styles/Title.module.scss"

const Title = ({title, className}: TitleProps) => {
	return (
		<h1 className={classNames(styles.title, className)}>
			{title}
		</h1>
	)
}

export default Title