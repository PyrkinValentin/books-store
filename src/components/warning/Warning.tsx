import {FC} from "react"

import classNames from "../../helpers/classNames"
import {WarningProps} from "./types/WarningTypes"

import styles from "./styles/Warning.module.scss"

const Warning: FC<WarningProps> = ({text, view = false}) => {
	return (
		<h2 className={classNames(styles.warning, view ? styles.warning__view : undefined)}>
			{text}
		</h2>
	)
}

export default Warning