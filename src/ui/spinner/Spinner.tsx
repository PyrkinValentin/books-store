import {FC} from "react"
import {SpinnerProps} from "./types/spinnerTypes"

import styles from "./styles/Spinner.module.scss"

const Spinner: FC<SpinnerProps> = ({ className }) => {
	return (
		<div className={styles.container}>
			<div className={className}>
				<svg width='100%' height='100%' viewBox="0 0 50 50" stroke="currentColor"><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg>
			</div>
		</div>
	)
}

export default Spinner