import {Link} from "react-router-dom"

import useAppSelector from "../../../../hooks/useAppSelector"
import useViewport from "../../../../hooks/useViewport"
import useDebounce from "../../../../hooks/useDebounce"
import {useSearchBooksQuery} from "../../../../services/searchApi"

import Warning from "../../../../components/warning/Warning"
import Button from "../../../../ui/button/Button"
import Spinner from "../../../../ui/spinner/Spinner"
import SearchItems from "./SearchItems"

import styles from "./styles/SearchResults.module.scss"

const SearchResults = () => {
	const {laptop} = useViewport()

	const {input, isShowResults} = useAppSelector((state) => state.searchReducer)
	const debouncedValue = useDebounce(input, 400)

	const {isFetching, data} = useSearchBooksQuery(
		{value: debouncedValue},
		{skip: debouncedValue.length < 3},
	)

	const isSearchPageAndViewportLaptop = document.location.pathname.startsWith('/search') && laptop

	if (!isShowResults || !data || isSearchPageAndViewportLaptop) {
		return <></>
	}

	return (
		<aside className={styles.container}>
			{isFetching &&
				<Spinner className={styles.spinner}/>
			}

			{!isFetching && !data.books.length &&
				<Warning text={'Your search returned no results'}/>
			}

			{!isFetching && Boolean(data.books.length) &&
				<>
					<SearchItems books={data?.books}/>

					<Link
						to={`/search/${debouncedValue}`}
						className={styles.results__btn}
					>
						<Button color={'white'}>
							All results
						</Button>
					</Link>
				</>
			}
		</aside>
	)
}

export default SearchResults