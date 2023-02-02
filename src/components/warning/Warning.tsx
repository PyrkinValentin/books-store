import {WarningProps} from "./types/WarningTypes"
import styles from "./styles/Warning.module.scss"

const Warning = ({text}: WarningProps) => {
	return (
		<h2 className={styles.warning}>
			{text}
		</h2>
	)
}

export default Warning