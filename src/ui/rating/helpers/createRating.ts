const createRating = (rating: string) => (
	Array.from(
		{length: 5},
		(_, key) => Number(rating) > key
	)
)

export default createRating