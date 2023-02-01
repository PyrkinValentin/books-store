import Header from "../modules/header/Header"
import Error from "../components/error/Error"

const NotFound = () => {
	return (
		<>
			<Header/>
			<Error
				text={'This is not the web page you are looking for.'}
				icon={'error404'}
			/>
		</>
	)
}

export default NotFound