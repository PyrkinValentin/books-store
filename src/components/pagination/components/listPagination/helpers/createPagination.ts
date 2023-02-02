import {ICreatePagination} from "./types/createPaginationTypes"

const createPagination = (currentPage: number, totalPage: number): ICreatePagination => {
	let controlPage = currentPage - 1

	if (currentPage <= 1) {
		controlPage = 1
	}

	if (totalPage >= 3 && currentPage >= totalPage) {
		controlPage = totalPage - 2
	}

	const pages = Array.from(
		{length: totalPage > 3 ? 3 : totalPage},
		(_, key) => key + controlPage
	)

	return {
		prevPage: controlPage < 1 ? 1 : controlPage,
		nextPage: controlPage + 2 > totalPage ? totalPage : controlPage + 2,
		pages,
	}
}
export default createPagination