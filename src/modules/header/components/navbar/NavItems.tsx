import {FC} from "react"
import {Link} from "react-router-dom"

import useSession from "../../../../hooks/useSession"
import useAppSelector from "../../../../hooks/useAppSelector"

import Icon from "../../../../ui/icon/Icon"

import {NavItemsProps} from "./types/NavItemsTypes"
import styles from "./styles/NavItems.module.scss"

const NavItems: FC<NavItemsProps> = ({show, onChangeShow, viewport}) => {
	const {loggedIn, logout} = useSession()

	const favorites = useAppSelector((state) => state.favoritesReducer.favorites)
	const cart = useAppSelector((state) => state.cartReducer.cart)

	return (
		<ul className={styles.nav__items}>
			{viewport.laptop &&
				<li>
					<Link to={'/favorites'} className={styles.nav__items_link}>
						<Icon name={'heart'}/>

						{Boolean(favorites.length) &&
							<span className={styles.nav__items_link_counter}></span>
						}
					</Link>
				</li>
			}

			<li>
				<Link to={'/cart'} className={styles.nav__items_link}>
					<Icon name={'basket'}/>

					{Boolean(cart.length) &&
						<span className={styles.nav__items_link_counter}></span>
					}
				</Link>
			</li>

			{viewport.laptop ? (
				<>
					{loggedIn &&
						<li>
							<Link to={'/account'} className={styles.nav__items_link}>
								<Icon name={'user'}/>
							</Link>
						</li>
					}

					<li>
						{!loggedIn ? (
							<Link to={'/login'} className={styles.nav__items_link}>
								<Icon name={'login'}/>
							</Link>
						) : (
							<button onClick={logout}>
								<Icon name={'logout'}/>
							</button>
						)}
					</li>
				</>
			) : (
				<li>
					<button className={styles.nav__items_link} onClick={onChangeShow}>
						{!show ? (
							<Icon name={'burger'}/>
						) : (
							<Icon name={'x'}/>
						)}
					</button>
				</li>
			)}
		</ul>
	)
}

export default NavItems