import {LayoutProps} from "./types/LayoutTypes"
import styles from "./styles/Layout.module.scss"

const Layout = ({children}: LayoutProps) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default Layout