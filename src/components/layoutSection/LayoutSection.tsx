import {LayoutSectionProps} from "./types/LayoutSectionTypes"
import styles from "./styles/LayoutSection.module.scss"

const LayoutSection = ({children}: LayoutSectionProps) => {
	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default LayoutSection