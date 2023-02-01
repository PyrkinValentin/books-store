const classNames = (...classes: Array<string | undefined>): string => (
	classes
		.filter(Boolean)
		.join(' ')
)

export default classNames