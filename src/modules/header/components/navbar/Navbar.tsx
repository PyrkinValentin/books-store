import {useState} from "react"

import useViewport from "../../../../hooks/useViewport"
import useScrollLock from "../../../../hooks/useScrollLock"

import NavItems from "./NavItems"
import NavMenu from "./NavMenu"

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const viewport = useViewport()

	useScrollLock(showMenu)

	const handleToggleShow = () => {
		setShowMenu((prev) => !prev)
	}

	return (
		<nav>
			<NavItems
				onChangeShow={handleToggleShow}
				show={showMenu}
				viewport={viewport}
			/>

			{!viewport.laptop && showMenu &&
				<NavMenu
					viewport={viewport}
					onChangeShow={handleToggleShow}
				/>
			}
		</nav>
	)
}

export default Navbar