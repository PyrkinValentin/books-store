import {Link} from "react-router-dom"

import useAppSelector from "../../../../hooks/useAppSelector"

import Search from "../search/Search"
import Button from "../../../../ui/button/Button"

import {NavMenuProps} from "./types/NavMenuTypes"
import styles from "./styles/NavMenu.module.scss"

const NavMenu = ({viewport, onChangeShow}: NavMenuProps) => {
	const favorites = useAppSelector((state) => state.favoritesReducer.favorites)
	const cart = useAppSelector((state) => state.cartReducer.cart)

	const countFavorites = Boolean(favorites.length)
		? favorites.length
		: null

	const countCart = Boolean(cart.length)
		? cart.length
		: null

	return (
		<>
			{viewport.tablet &&
				<div
					className={styles.container}
					onClick={onChangeShow}
				/>
			}

			<div className={styles.menu}>
				<Search/>

				<ul>
					<li>
						<Link to={'/favorites'} className={styles.menu__link}>
							Favorites <span className={styles.counter}>{countFavorites}</span>
						</Link>
					</li>

					<li>
						<Link to={'/card'} className={styles.menu__link}>
							Card <span className={styles.counter}>{countCart}</span>
						</Link>
					</li>

					<li>
						<Link to={'/account'} className={styles.menu__link}>
							Account
						</Link>
					</li>
				</ul>

				<Link to={'/sign-in'}>
					<Button>
						Sign in
					</Button>
				</Link>
			</div>
		</>
	)
}

export default NavMenu