import {FC} from "react"

import useAppSelector from "../../hooks/useAppSelector"
import useAppDispatch from "../../hooks/useAppDispatch"

import Icon from "../../ui/icon/Icon"

import {setFavorites} from "../../store/slices/favoritesSlice"
import {FavoriteActionProps} from "./types/FavoriteActionTypes"

import styles from "./styles/FavoriteAction.module.scss"

const FavoriteAction: FC<FavoriteActionProps> = (props) => {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector((state) => state.favoritesReducer.favorites)

	const handleFavorites = () => {
		dispatch(
			setFavorites(props)
		)
	}

	const isFavorites = favorites.find((favorite) => favorite.isbn13 === props.isbn13)

	return (
		<button
			className={styles.button}
			onClick={handleFavorites}
		>
			<Icon
				name={'heart'}
				strokeWidth={1.4}
				className={isFavorites ? styles.action : undefined}
			/>
		</button>
	)
}

export default FavoriteAction