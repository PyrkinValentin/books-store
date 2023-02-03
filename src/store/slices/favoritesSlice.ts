import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IFavorite, IFavoritesSliceInitialState} from "./types/favoriteSliceTypes"

const initialState: IFavoritesSliceInitialState = {
	favorites: []
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state: IFavoritesSliceInitialState, action: PayloadAction<IFavorite>) => {
			const isFindFavorite = state.favorites
				.find((favorite) => favorite.isbn13 === action.payload.isbn13)

			state.favorites = !isFindFavorite
				? [action.payload, ...state.favorites]
				: state.favorites.filter((favorite) => favorite.isbn13 !== isFindFavorite.isbn13)
		}
	}
})

export default favoritesSlice.reducer
export const {setFavorites} = favoritesSlice.actions