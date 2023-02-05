import {useSearchBooksQuery} from "../../../../services/searchApi"

import Error from "../../../../components/error/Error"
import Spinner from "../../../../ui/spinner/Spinner"
import Slider from "../../../../ui/slider/Slider"

import styles from "./styles/Popular.module.scss"

const Popular = () => {
	const {isFetching, data} = useSearchBooksQuery({value: 'new'})

	if (isFetching) {
		return (
			<Spinner className={styles.spinner}/>
		)
	}

	if (!data) {
		return (
			<Error
				text={'Popular books not found'}
				icon={'search-off'}
			/>
		)
	}

	return (
		<Slider
			title={'Popular books'}
			books={data.books}
		/>
	)
}

export default Popular