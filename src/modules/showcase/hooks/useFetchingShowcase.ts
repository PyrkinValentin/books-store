import {useParams} from "react-router-dom"

import useAppSelector from "../../../hooks/useAppSelector"
import useDebounce from "../../../hooks/useDebounce"
import {useSearchBooksQuery} from "../../../services/searchApi"

import calcTotalPages from "../helpers/calcTotalPages"

import {BookShowcaseParams} from "../types/ShowcaseTypes"
import {IUseFetchingShowcase} from "../types/useFetchingShowcaseTypes"

const useFetchingShowcase = (): IUseFetchingShowcase => {
	const {value, page} = useParams<BookShowcaseParams>()

	const input = useAppSelector((state) => state.searchReducer.input)
	const debouncedValue = useDebounce(input, 400)

	const isSearchPage = document.location.pathname.startsWith('/search') && value !== undefined

	const concatValue = isSearchPage
		? debouncedValue || value
		: 'new'

	const {data, isFetching} = useSearchBooksQuery(
		{value: concatValue, page},
		{skip: isSearchPage && concatValue.length < 3},
	)

	return {
		isSearchPage,
		isFetching,
		value: concatValue,
		books: data?.books ?? [],
		currentPage: Number(page ?? 1),
		totalPages: calcTotalPages(data?.total),
		totalBooks: Number(data?.total ?? 0),
	}
}

export default useFetchingShowcase