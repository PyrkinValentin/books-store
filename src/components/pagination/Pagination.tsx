import {ScrollRestoration} from "react-router-dom"

import PrevPagination from "./components/prevPagination/PrevPagination"
import ListPagination from "./components/listPagination/ListPagination"
import NextPagination from "./components/nextPagination/NextPagination"

import createPagination from "./components/listPagination/helpers/createPagination"

import {PaginationProps} from "./types/PaginationTypes"
import styles from "./styles/Pagination.module.scss"

const Pagination = ({currentPage, totalPage}: PaginationProps) => {
	const {prevPage, pages, nextPage} = createPagination(currentPage, totalPage)

	return (
		<nav className={styles.container}>
			<ScrollRestoration/>
			<PrevPagination prevPage={prevPage}/>

			<ListPagination
				currentPage={currentPage}
				prevPage={prevPage}
				pages={pages}
				nextPage={nextPage}
				totalPage={totalPage}
			/>

			<NextPagination
				nextPage={nextPage}
				totalPage={totalPage}
			/>
		</nav>
	)
}

export default Pagination