import {ISearchLoader} from "../types/searchLoaderType"

const searchLoader = ({request}: ISearchLoader) => {
	document.title = 'Search'
	return null
}

export default searchLoader