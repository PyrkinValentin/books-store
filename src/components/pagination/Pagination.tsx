import {FC} from "react"
import {ScrollRestoration} from "react-router-dom"

import PrevPagination from "./components/prevPagination/PrevPagination"
import ListPagination from "./components/listPagination/ListPagination"
import NextPagination from "./components/nextPagination/NextPagination"

import createPagination from "./components/listPagination/helpers/createPagination"

import {PaginationProps} from "./types/PaginationTypes"
import styles from "./styles/Pagination.module.scss"

const Pagination: FC<PaginationProps> = ({currentPage, totalPage}) => {
	const pages = createPagination(currentPage, totalPage)

	return (
		<nav className={styles.container}>
			<ScrollRestoration/>
			<PrevPagination
				currentPage={currentPage}
			/>

			<ListPagination
				currentPage={currentPage}
				pages={pages}
				lastPage={totalPage}
			/>

			<NextPagination
				currentPage={currentPage}
				lastPage={totalPage}
			/>
		</nav>
	)
}

export default Pagination