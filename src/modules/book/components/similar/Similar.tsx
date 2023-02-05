import {useParams} from "react-router-dom"
import {useGetBookQuery, useSearchBooksQuery} from "../../../../services/searchApi"

import Error from "../../../../components/error/Error"
import Spinner from "../../../../ui/spinner/Spinner"
import Slider from "../../../../ui/slider/Slider"

import {ProductParams} from "../../types/ProductTypes"
import styles from "./styles/Similar.module.scss"

const Similar = () => {
	const params = useParams<ProductParams>()
	const {isFetching, data} = useGetBookQuery(params.id)

	const {isFetching: isFetchingSimilar, data: dataSimilar} = useSearchBooksQuery(
		{value: !data ? '' : data.title},
		{skip: isFetching || !data}
	)

	if (isFetching || isFetchingSimilar) {
		return (
			<Spinner className={styles.spinner}/>
		)
	}

	if (!data || !dataSimilar) {
		return (
			<Error
				text={'Similar suggestions not found'}
				icon={'search-off'}
			/>
		)
	}

	return (
		<Slider
			title={'Similar books'}
			books={dataSimilar.books}
			skip={data.isbn13}
		/>
	)
}

export default Similar