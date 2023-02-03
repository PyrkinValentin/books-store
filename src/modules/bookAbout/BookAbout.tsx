import {useParams} from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import {useGetBookQuery} from "../../services/searchApi"
import useHead from "../../hooks/useHead"

import Error from "../../components/error/Error"
import Spinner from "../../ui/spinner/Spinner"
import Title from "../../ui/title/Title"
import Poster from "../../components/poster/Poster"
import FavoriteAction from "../favoriteAction/FavoriteAction"
import BookDescription from "./components/bookDescription/BookDescription"
import PaperSwitch from "../../ui/paperSwitch/PaperSwitch"
import Button from "../../ui/button/Button"
import SocialButtons from "../../components/socialButtons/SocialButtons"

import {BookAboutParams} from "./types/BookAboutTypes"
import styles from "./styles/BookAbout.module.scss"

const BookAbout = () => {
	const params = useParams<BookAboutParams>()
	const {isFetching, data} = useGetBookQuery(params.id)

	useHead({
		title: data?.title ?? 'Book'
	})

	if (isFetching) {
		return (
			<Spinner className={styles.spinner}/>
		)
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
						year={data.year}
						language={data.language}
					/>

					<PaperSwitch label={'More details'}>
						{data.subtitle}
					</PaperSwitch>

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

			<Tabs
				className={styles.tabs}
				selectedTabClassName={styles.tabs__active}
				selectedTabPanelClassName={styles.tabs__panel}
				focusTabOnClick={false}
			>
				<TabList className={styles.tabs__list}>
					<Tab>Description</Tab>
					<Tab>Authors</Tab>
					<Tab>Reviews</Tab>
				</TabList>

				<TabPanel>{data.desc}</TabPanel>
				<TabPanel>{data.authors}</TabPanel>
				<TabPanel>No reviews</TabPanel>
			</Tabs>

			<SocialButtons/>
		</>
	)
}

export default BookAbout