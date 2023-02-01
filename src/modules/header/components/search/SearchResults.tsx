import {Link} from "react-router-dom"

import useAppSelector from "../../../../hooks/useAppSelector"
import useDebounce from "../../../../hooks/useDebounce"
import {useSearchBooksQuery} from "../../services/searchApi"

import Button from "../../../../ui/button/Button"
import Spinner from "../../../../ui/spinner/Spinner"

import styles from "./styles/SearchResults.module.scss"

const SearchResults = () => {
	const input = useAppSelector((state) => state.searchReducer.input)
	const debouncedValue = useDebounce(input, 400)
	const {isFetching, isError, data} = useSearchBooksQuery(debouncedValue, {skip: debouncedValue.length < 3})

	if (!input.length) {
		return <></>
	}

	return (
		<aside className={styles.container}>
			{isFetching &&
				<Spinner className={styles.spinner}/>
			}

			{!isFetching && !data?.books.length &&
				<h2>No results</h2>
			}

			{!isFetching && Boolean(data?.books.length) &&
				<>
					<ul className={styles.items}>
						{data?.books.map((book) =>
							<li key={book.isbn13}>
								<Link
									to={`/book/${book.isbn13}`}
									className={styles.items__link}
								>
									<img src={book.image} alt={book.title}/>
									{book.title}
								</Link>
							</li>
						)}
					</ul>

					<Link to={'/search/34rtrfdss'} className={styles.results__btn}>
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