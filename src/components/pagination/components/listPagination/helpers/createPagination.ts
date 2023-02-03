const createPagination = (currentPage: number, totalPage: number): number[] => {
	if (currentPage <= 1) {
		return [1, 2, 3]
	}

	if (currentPage >= totalPage) {
		return [totalPage - 2, totalPage - 1, totalPage]
	}

	return [currentPage - 1, currentPage, currentPage + 1]
}
export default createPagination