import useAppSelector from "../../hooks/useAppSelector"

import Warning from "../../components/warning/Warning"
import FavoriteCard from "./components/favoriteCard/FavoriteCard"
import FavoriteAction from "../favoriteAction/FavoriteAction"
import Popular from "./components/popular/Popular"

import styles from "./styles/Favorites.module.scss"

const Favorites = () => {
	const favorites = useAppSelector((state) => state.favoritesReducer.favorites)

	return (
		<>
			{!favorites.length &&
				<Warning text={'No favorites :('}/>
			}

			{Boolean(favorites.length) &&
				<ul className={styles.container}>
					{favorites.map((favorite) =>
						<li key={favorite.isbn13} className={styles.favorite}>
							<FavoriteCard
								image={favorite.image}
								title={favorite.title}
								authors={favorite.authors}
								publisher={favorite.publisher}
								year={favorite.year}
								price={favorite.price}
								rating={favorite.rating}
							/>

							<FavoriteAction
								isbn13={favorite.isbn13}
								image={favorite.image}
								title={favorite.title}
								authors={favorite.authors}
								publisher={favorite.publisher}
								rating={favorite.rating}
								year={favorite.year}
								price={favorite.price}
								className={styles.favorite__action}
							/>
						</li>
					)}
				</ul>
			}

			<Popular/>
		</>
	)
}

export default Favorites