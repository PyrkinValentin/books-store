import {Link} from "react-router-dom"

import createUrlPagination from "../../helpers/createUrlPagination"
import {ListPaginationProps} from "./types/ListPaginationTypes"

import styles from "./styles/ListPagination.module.scss"

const ListPagination = ({currentPage, pages, lastPage}: ListPaginationProps) => {
	const prevPage = currentPage - 1
	const nextPage = currentPage + 1

	const isNotFirstPage = prevPage > 1
	const isNotLastPage = nextPage < lastPage

	return (
		<ul className={styles.list}>
			{isNotFirstPage &&
				<>
					<li>
						<Link to={createUrlPagination(1)}>1</Link>
					</li>
					<li>...</li>
				</>
			}

			{pages.map((page) => (
				<li key={page}>
					<Link
						to={createUrlPagination(page)}
						className={currentPage === page ? styles.currentPage : undefined}
					>
						{page}
					</Link>
				</li>
			))}

			{isNotLastPage &&
				<>
					<li>...</li>
					<li>
						<Link to={createUrlPagination(lastPage)}>{lastPage}</Link>
					</li>
				</>
			}
		</ul>
	)
}

export default ListPagination