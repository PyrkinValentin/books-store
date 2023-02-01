import {Link} from "react-router-dom"

import Icon from "../../../../ui/icon/Icon"

import {NavItemsProps} from "./types/NavItemsTypes"
import styles from "./styles/NavItems.module.scss"

const NavItems = ({show, onChangeShow, viewport}: NavItemsProps) => {
	return (
		<ul className={styles.nav__items}>
			{viewport.laptop &&
				<li>
					<Link to={'/favorites'} className={styles.nav__items_link}>
						<Icon name={'heart'}/>
						<span className={styles.nav__items_link_counter}></span>
					</Link>
				</li>
			}

			<li>
				<Link to={'/card'} className={styles.nav__items_link}>
					<Icon name={'basket'}/>
					<span className={styles.nav__items_link_counter}></span>
				</Link>
			</li>

			{viewport.laptop ? (
				<li>
					<Link to={'/user'} className={styles.nav__items_link}>
						<Icon name={'user'}/>
					</Link>
				</li>
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