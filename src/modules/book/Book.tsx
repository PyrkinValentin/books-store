import {useParams} from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"
import {useGetBookQuery} from "../../services/searchApi"
import useHead from "../../hooks/useHead"

import Error from "../../components/error/Error"
import Spinner from "../../ui/spinner/Spinner"
import Title from "../../ui/title/Title"
import Poster from "../../components/poster/Poster"
import FavoriteAction from "../favoriteAction/FavoriteAction"
import Description from "./components/description/Description"
import PaperSwitch from "../../ui/paperSwitch/PaperSwitch"
import Button from "../../ui/button/Button"

import {setCart} from "../../store/slices/cartSlice"

import {ProductParams} from "./types/ProductTypes"
import styles from "./styles/Product.module.scss"

const Book = () => {
	const params = useParams<ProductParams>()
	const dispatch = useAppDispatch()

	const cart = useAppSelector((state) => state.cartReducer.cart)
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
				text={'BookPage not found'}
				icon={'search-off'}
			/>
		)
	}

	const handleSetBasket = () => {
		dispatch(
			setCart({
				isbn13: data.isbn13,
				image: data.image,
				title: data.title,
				authors: data.authors,
				publisher: data.publisher,
				price: data.price,
				year: data.year,
				count: 1,
			})
		)
	}

	const checkBookFromCart = cart.find((book) => book.isbn13 === params.id)

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
						year={data.year}
						price={data.price}
						className={styles.favoriteAction}
					/>
				</div>

				<div className={styles.info}>
					<hr/>

					<Description
						price={data.price}
						rating={data.rating}
						authors={data.authors}
						publisher={data.publisher}
						year={data.year}
						language={data.language}
					/>

					{Boolean(data.subtitle) &&
						<PaperSwitch label={'More details'}>
							{data.subtitle}
						</PaperSwitch>
					}

					<Button
						className={styles.btn__add_card}
						onClick={handleSetBasket}
						disabled={Boolean(checkBookFromCart)}
					>
						{!checkBookFromCart ? 'Add to card' : 'Added to shopping list'}
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
		</>
	)
}

export default Book