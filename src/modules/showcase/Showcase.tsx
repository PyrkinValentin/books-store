import {Link} from "react-router-dom"

import useFetchingShowcase from "./hooks/useFetchingShowcase"

import Title from "../../ui/title/Title"
import Warning from "../../components/warning/Warning"
import Spinner from "../../ui/spinner/Spinner"
import LayoutGrid from "../../components/layoutGrid/LayoutGrid"
import BookCard from "../../components/bookCard/BookCard"
import Pagination from "../../components/pagination/Pagination"

import styles from "./styles/Showcase.module.scss"

const Showcase = () => {
	const data = useFetchingShowcase()

	return (
		<>
			<Title title={data.isSearchPage ? `‘${data.value}’ Search results` : 'New releases books'}/>

			{data.isSearchPage && Boolean(data.totalBooks) &&
				<p className={styles.total__results}>
					Found {data.totalBooks} {data.totalBooks === 1 ? 'book' : 'books'}
				</p>
			}

			{data.isFetching &&
				<Spinner className={styles.spinner}/>
			}

			{!data.isFetching && !data.books.length &&
				<Warning text={'Your search returned no results'}/>
			}

			{!data.isFetching && Boolean(data.books.length) &&
				<>
					<LayoutGrid className={styles.books__layout}>
						{data.books.map((book) =>
							<li key={book.isbn13}>
								<Link to={`/book/${book.isbn13}`}>
									<BookCard book={book}/>
								</Link>
							</li>
						)}
					</LayoutGrid>

					{data.isSearchPage && Boolean(data.totalPages) &&
						<Pagination
							currentPage={data.currentPage}
							totalPage={data.totalPages}
						/>
					}
				</>
			}
		</>
	)
}

export default Showcase