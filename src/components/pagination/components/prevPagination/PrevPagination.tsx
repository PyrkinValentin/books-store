import {Link} from "react-router-dom"
import Icon from "../../../../ui/icon/Icon"

import classNames from "../../../../helpers/classNames"
import createUrlPagination from "../../helpers/createUrlPagination"

import {PrevPaginationProps} from "./types/PrevPaginationTypes"
import styles from "./styles/PrevPagination.module.scss"

const PrevPagination = ({prevPage}: PrevPaginationProps) => {
	return (
		<Link
			to={createUrlPagination(prevPage)}
			className={classNames(styles.link, prevPage === 1 ? styles.link_disabled : undefined)}
		>
			<Icon name={'arrow-left'}/>
			Prev
		</Link>
	)
}

export default PrevPagination