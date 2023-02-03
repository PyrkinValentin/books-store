import {useParams} from "react-router-dom"

import {useGetBookQuery} from "../../services/searchApi"
import useHead from "../../hooks/useHead"

import Error from "../../components/error/Error"
import Spinner from "../../ui/spinner/Spinner"
import Title from "../../ui/title/Title"
import Poster from "../../components/poster/Poster"
import FavoriteAction from "../favoriteAction/FavoriteAction"
import BookDescription from "./components/BookDescription"
import Button from "../../ui/button/Button"

import {BookAboutParams} from "./types/BookAboutTypes"

import styles from "./styles/BookAbout.module.scss"

const BookAbout = () => {
	const params = useParams<BookAboutParams>()
	const {isFetching, data} = useGetBookQuery(params.id)

	useHead({
		title: data?.title ?? 'Book'
	})

	if (isFetching) {
		return <Spinner className={styles.spinner}/>
	}

	if (!data?.isbn13) {
		return (
			<Error
				text={'Book not found'}
				icon={'search-off'}
			/>
		)
	}

	return (
		<>
			<Title title={data.title}/>

			<div className={styles.group}>
				<div className={styles.wrapper}>
					<Poster
						image={data.image}
						alt={data.title}
						className={styles.wrapper__poster}
					/>

					<FavoriteAction
						isbn13={data.isbn13}
						title={data.title}
						authors={data.authors}
						image={data.image}
						rating={data.rating}
						publisher={data.publisher}
					/>
				</div>

				<div className={styles.info}>
					<hr/>

					<BookDescription
						price={data.price}
						rating={data.rating}
						authors={data.authors}
						publisher={data.publisher}
						language={data.language}
					/>

					<Button className={styles.btn__add_card}>
						Add to card
					</Button>

					<Button
						color={'white'}
						className={styles.btn__prev_book}
					>
						Preview book
					</Button>
				</div>
			</div>
		</>
	)
}

export default BookAbout