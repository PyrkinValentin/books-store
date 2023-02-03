import {FC} from "react"
import {LayoutProps} from "./types/LayoutTypes"

import styles from "./styles/Layout.module.scss"

const Layout: FC<LayoutProps> = ({children}) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default Layout