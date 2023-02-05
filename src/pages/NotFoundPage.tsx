import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import Error from "../components/error/Error"

const NotFoundPage = () => {
	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<Error
					text={'This is not the web page you are looking for.'}
					icon={'error404'}
				/>
			</LayoutSection>
		</Layout>
	)
}

export default NotFoundPage