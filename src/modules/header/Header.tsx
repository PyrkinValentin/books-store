import useViewport from "../../hooks/useViewport"

import Logo from "./components/logo/Logo"
import Search from "./components/search/Search"
import Navbar from "./components/navbar/Navbar"

import styles from "./styles/Header.module.scss"

const Header = () => {
	const {laptop} = useViewport()

	return (
		<header className={styles.container}>
			<Logo/>
			{laptop && <Search/>}
			<Navbar/>
		</header>
	)
}

export default Header