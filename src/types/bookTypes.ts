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

interface IBookCart {
	isbn13: string
	image: string
	title: string
	authors: string
	publisher: string
	price: string
	year: string
	count: number
}

export type {
	IBook,
	IBookDetails,
	IBookCart,
}