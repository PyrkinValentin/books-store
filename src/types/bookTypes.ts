interface IBook {
	title: string
	image: string
	isbn13: string
	price: string
	subtitle: string
}

interface IBookDetails extends IBook {
	authors: string
	desc: string
	language: string
	publisher: string
	rating: string
	url: string
	year: string
}

export type {
	IBook,
	IBookDetails,
}