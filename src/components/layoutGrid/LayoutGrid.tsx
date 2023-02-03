import {FC} from "react"

import classNames from "../../helpers/classNames"
import {LayoutGridProps} from "./types/LayoutGridTypes"

import styles from "./styles/LayoutGrid.module.scss"

const LayoutGrid: FC<LayoutGridProps> = ({children, className}) => {
	return (
		<ul className={classNames(styles.container, className)}>
			{children}
		</ul>
	)
}

export default LayoutGrid