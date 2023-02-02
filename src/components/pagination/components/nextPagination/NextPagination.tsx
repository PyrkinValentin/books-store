import {Link} from "react-router-dom"
import Icon from "../../../../ui/icon/Icon"
import createUrlPagination from "../../helpers/createUrlPagination"
import classNames from "../../../../helpers/classNames"
import {NextPaginationProps} from "./types/NextPaginationTypes"

import styles from "./styles/NextPagination.module.scss"

const NextPagination = ({nextPage, totalPage}: NextPaginationProps) => {
	return (
		<Link
			to={createUrlPagination(nextPage)}
			className={classNames(styles.link, nextPage === totalPage ? styles.link_disabled : undefined)}
		>
			Next
			<Icon name={'arrow-right'}/>
		</Link>
	)
}

export default NextPagination