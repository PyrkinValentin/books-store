import Icon from "../../ui/icon/Icon"

import {ErrorProps} from "./types/ErrorTypes"
import styles from "./styles/Error.module.scss"

const Error = ({text, icon}: ErrorProps) => {
	return (
		<div className={styles.container}>
			{Boolean(icon) &&
				<Icon name={icon ?? ''} width={120} height={120}/>
			}

			<h1>{text}</h1>
		</div>
	)
}

export default Error