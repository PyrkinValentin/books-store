import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import BookAbout from "../modules/bookAbout/BookAbout"
import SubscribeNewsLetter from "../modules/subscribeNewsLetter/SubscribeNewsLetter"
import Footer from "../modules/footer/Footer"

const Book = () => {
	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<BookAbout/>
				<SubscribeNewsLetter/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default Book