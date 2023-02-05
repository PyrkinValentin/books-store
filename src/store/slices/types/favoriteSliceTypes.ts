interface IFavorite {
	isbn13: string
	image: string
	title: string
	authors: string
	publisher: string
	rating: string
	year: string
	price: string
}

interface IFavoritesSliceInitialState {
	favorites: IFavorite[]
}

export type {
	IFavorite,
	IFavoritesSliceInitialState,
}