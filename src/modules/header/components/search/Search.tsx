import {useCallback} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import useClickOutside from "../../../../hooks/useClickOutside"

import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"

import {setShowResults} from "../../../../store/slices/searchSlice"
import styles from "./styles/Search.module.scss"

const Search = () => {
	const dispatch = useAppDispatch()
	
	const handleClickOutside = useCallback(() => {
		dispatch(
			setShowResults(false)
		)
	}, [dispatch])

	const ref = useClickOutside(handleClickOutside)

	return (
		<div ref={ref} className={styles.container}>
			<SearchForm/>
			<SearchResults/>
		</div>
	)
}

export default Search