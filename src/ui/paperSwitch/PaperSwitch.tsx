import {FC} from "react"

import Icon from "../icon/Icon"
import {PaperSwitchProps} from "./types/PapperSwitchTypes"

import styles from "./styles/PaperSwitch.module.scss"

const PaperSwitch: FC<PaperSwitchProps> = ({children, label}) => {
	return (
		<details className={styles.container}>
			<summary className={styles.title}>
				{label}

				<Icon
					name={'chevron-down'}
					width={18}
					height={18}
					strokeWidth={2}
				/>
			</summary>

			<p className={styles.details}>{children}</p>
		</details>
	)
}

export default PaperSwitch