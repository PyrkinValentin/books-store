import {ErrorProps} from "./types/ErrorTypes"
import styles from "./styles/Error.module.scss"
import Icon from "../../ui/icon/Icon"

const Error = ({text, icon}: ErrorProps) => {
	return (
		<section className={styles.container}>
			{Boolean(icon) &&
				<Icon name={icon ?? ''} width={120} height={120}/>
			}

			<h1>{text}</h1>
		</section>
	)
}

export default Error