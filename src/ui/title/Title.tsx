import {TitleProps} from "./types/TitleTypes"
import styles from "./styles/Title.module.scss"

const Title = ({title}: TitleProps) => {
	return (
		<h1 className={styles.title}>{title}</h1>
	)
}

export default Title