import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"

import styles from "./styles/Search.module.scss"

const Search = () => {
	return (
		<div className={styles.container}>
			<SearchForm/>
			<SearchResults/>
		</div>
	)
}

export default Search