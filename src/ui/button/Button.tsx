import classNames from "../../helpers/classNames"
import {ButtonProps, IColorButtonItems} from "./types/ButtonTypes"

import styles from "./styles/Button.module.scss"

const colorButtonsItems: IColorButtonItems = {
	black: styles.button__black,
	white: styles.button__white,
}

const Button = ({children, color = 'black'}: ButtonProps) => {
	return (
		<button className={classNames(styles.button, colorButtonsItems[color])}>
			{children}
		</button>
	)
}

export default Button