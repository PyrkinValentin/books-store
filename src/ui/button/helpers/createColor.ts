import {IColorButtonItems} from "../types/ButtonTypes"
import styles from "../styles/Button.module.scss"

const createColor = (color: string): string => {
	const colorButtonsItems: IColorButtonItems = {
		black: styles.button__black,
		white: styles.button__white,
	}

	return colorButtonsItems[color]
}

export default createColor