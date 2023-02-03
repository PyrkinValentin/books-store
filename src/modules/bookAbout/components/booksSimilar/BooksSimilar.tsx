import {Link, useParams} from "react-router-dom"
import {useGetBookQuery, useSearchBooksQuery} from "../../../../services/searchApi"

import Error from "../../../../components/error/Error"
import Spinner from "../../../../ui/spinner/Spinner"
import Title from "../../../../ui/title/Title"
import BookCard from "../../../../components/bookCard/BookCard"
import Icon from "../../../../ui/icon/Icon"

import {BookAboutParams} from "../../types/BookAboutTypes"
import styles from "./styles/BooksSimilar.module.scss"
import {useState} from "react"
import LayoutGrid from "../../../../components/layoutGrid/LayoutGrid";


const BooksSimilar = () => {
	const [currentPage, setCurrentPage] = useState(0)

	const params = useParams<BookAboutParams>()
	const {isFetching, data} = useGetBookQuery(params.id)

	const {isFetching: isFetchingSimilar, data: dataSimilar} = useSearchBooksQuery(
		{value: data ? data.title : ''},
		{skip: isFetching || !data}
	)

	const handlePrevPage = () => {
		const prevPage = currentPage - 1

		setCurrentPage(
			Boolean(prevPage)
				? prevPage
				: currentPage
		)
	}

	const handleNextPage = () => {
		const nextPage = currentPage + 1

		setCurrentPage(
			nextPage < 7
				? nextPage
				: currentPage
		)
	}

	if (isFetching || isFetchingSimilar) {
		return (
			<Spinner className={styles.spinner}/>
		)
	}

	if (!data?.isbn13 || !dataSimilar?.books.length) {
		return (
			<Error
				text={'Similar suggestions not found'}
				icon={'search-off'}
			/>
		)
	}

	const similarSuggestions = dataSimilar.books
		.filter((book) => book.isbn13 !== data.isbn13)
		.slice(currentPage, currentPage + 3)

	return (
		<>
			<div className={styles.wrapper}>
				<Title title={'Similar books'} className={styles.title}/>

				<div className={styles.pagination}>
					<button onClick={handlePrevPage}>
						<Icon
							name={'arrow-left'}
							width={36}
							height={36}
						/>
					</button>

					<button onClick={handleNextPage}>
						<Icon
							name={'arrow-right'}
							width={36}
							height={36}
						/>
					</button>
				</div>
			</div>

			<LayoutGrid className={styles.books}>
				{similarSuggestions.map((book) =>
					<li key={book.isbn13}>
						<Link to={`/book/${book.isbn13}`}>
							<BookCard book={book}/>
						</Link>
					</li>
				)}
			</LayoutGrid>
		</>
	)
}

export default BooksSimilar