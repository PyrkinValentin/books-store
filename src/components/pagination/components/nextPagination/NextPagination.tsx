import {Link} from "react-router-dom"
import Icon from "../../../../ui/icon/Icon"
import createUrlPagination from "../../helpers/createUrlPagination"
import classNames from "../../../../helpers/classNames"
import {NextPaginationProps} from "./types/NextPaginationTypes"

import styles from "./styles/NextPagination.module.scss"

const NextPagination = ({currentPage, lastPage}: NextPaginationProps) => {
	const nextPage = currentPage + 1
	const isLastPage = nextPage > lastPage

	return (
		<Link
			to={createUrlPagination(nextPage)}
			className={classNames(styles.link, isLastPage ? styles.link_disabled : undefined)}
		>
			Next
			<Icon name={'arrow-right'}/>
		</Link>
	)
}

export default NextPagination