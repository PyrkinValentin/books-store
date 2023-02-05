import classNames from "../../helpers/classNames"
import createColor from "./helpers/createColor"

import {ButtonProps} from "./types/ButtonTypes"
import styles from "./styles/Button.module.scss"

const Button = ({children, color = 'black', className, disabled = false, onClick}: ButtonProps) => {
	return (
		<button
			className={
				classNames(
					styles.button,
					createColor(color),
					className
				)
			}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button