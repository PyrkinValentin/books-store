import {Link} from "react-router-dom"
import Icon from "../../../../ui/icon/Icon"

import classNames from "../../../../helpers/classNames"
import createUrlPagination from "../../helpers/createUrlPagination"

import {PrevPaginationProps} from "./types/PrevPaginationTypes"
import styles from "./styles/PrevPagination.module.scss"

const PrevPagination = ({currentPage}: PrevPaginationProps) => {
	const prevPage = currentPage - 1
	const isFirstPage = prevPage < 1
	
	return (
		<Link
			to={createUrlPagination(prevPage)}
			className={classNames(styles.link, isFirstPage ? styles.link_disabled : undefined)}
		>
			<Icon name={'arrow-left'}/>
			Prev
		</Link>
	)
}

export default PrevPagination