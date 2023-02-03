import {useEffect} from "react"
import {IUseHead} from "./types/useHeadTypes"

const useHead = ({title}: IUseHead) => {
	useEffect(
		() => {document.title = title},
		[title]
	)
}

export default useHead