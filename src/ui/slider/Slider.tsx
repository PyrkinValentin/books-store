import {FC, useState} from "react"
import {Link} from "react-router-dom"

import useViewport from "../../hooks/useViewport"

import Title from "../title/Title"
import Icon from "../icon/Icon"
import LayoutGrid from "../../components/layoutGrid/LayoutGrid"
import BookCard from "../../components/bookCard/BookCard"

import {SliderProps} from "./types/SliderTypes"
import styles from "./styles/Slider.module.scss"

const Slider: FC<SliderProps> = ({title, books, skip}) => {
	const {laptop, tablet} = useViewport()
	const [currentPage, setCurrentPage] = useState(0)

	const handlePrevPage = () => {
		const prevPage = currentPage - 1

		setCurrentPage(
			prevPage >= 0
				? prevPage
				: currentPage
		)
	}

	const handleNextPage = () => {
		const nextPage = currentPage + 1
		const lastPage = laptop ? 7 : tablet ? 8 : 9

		setCurrentPage(
			nextPage < lastPage
				? nextPage
				: currentPage
		)
	}

	const suggestions = books
		.filter((book) => book.isbn13 !== skip)
		.slice(currentPage, currentPage + (laptop ? 3 : tablet ? 2 : 1))

	return (
		<>
			<div className={styles.wrapper}>
				<Title title={title}/>

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

			<LayoutGrid>
				{suggestions.map((book) =>
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

export default Slider