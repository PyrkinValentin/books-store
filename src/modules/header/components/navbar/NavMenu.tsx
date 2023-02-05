import {Link} from "react-router-dom"

import useSession from "../../../../hooks/useSession"
import useAppSelector from "../../../../hooks/useAppSelector"

import Search from "../search/Search"
import Button from "../../../../ui/button/Button"

import {NavMenuProps} from "./types/NavMenuTypes"

import styles from "./styles/NavMenu.module.scss"

const NavMenu = ({viewport, onChangeShow}: NavMenuProps) => {
	const {loggedIn, logout} = useSession()

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
						<Link to={'/cart'} className={styles.menu__link}>
							Cart <span className={styles.counter}>{countCart}</span>
						</Link>
					</li>

					{loggedIn &&
						<li>
							<Link to={'/account'} className={styles.menu__link}>
								Account
							</Link>
						</li>
					}
				</ul>

				{loggedIn ? (
					<Button onClick={logout}>Log out</Button>
				) : (
					<Link to={'/login'}>
						<Button>Sign in</Button>
					</Link>
				)}
			</div>
		</>
	)
}

export default NavMenu