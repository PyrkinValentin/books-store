import {Link} from "react-router-dom"

import createUrlPagination from "../../helpers/createUrlPagination"
import {ListPaginationProps} from "./types/ListPaginationTypes"

import styles from "./styles/ListPagination.module.scss"

const ListPagination = ({currentPage, prevPage, pages, nextPage, totalPage}: ListPaginationProps) => {
	return (
		<ul className={styles.list}>
			{prevPage > 1 &&
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

			{nextPage < totalPage &&
				<>
					<li>...</li>
					<li>
						<Link to={createUrlPagination(totalPage)}>{totalPage}</Link>
					</li>
				</>
			}
		</ul>
	)
}

export default ListPagination