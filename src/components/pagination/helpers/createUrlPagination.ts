const createUrlPagination = (page: number): string => {
	const slicesPathname = document.location.pathname.split('/')

	const newPathname = slicesPathname
		.filter((slice) => Number.isNaN(Number(slice)))
		.join('/')

	const currentPage = Boolean(page) && page !== 1 ? `/${page}` : ''

	return `${document.location.origin}/${newPathname}${currentPage}`
}

export default createUrlPagination