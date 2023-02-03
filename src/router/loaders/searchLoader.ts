import documentTitle from "../helpers/documentTitle"
import {ILoader} from "../types/loaderTypes"

const searchLoader = ({request}: ILoader) => documentTitle('Search')

export default searchLoader