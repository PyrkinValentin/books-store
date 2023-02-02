import {IBook} from "../../../types/bookTypes"

interface IUseFetchingBookShowcase {
	isSearchPage: boolean
	isFetching: boolean
	value: string
	books: IBook[]
	currentPage: number
	totalPages: number
	totalBooks: number
}

export type {
	IUseFetchingBookShowcase,
}