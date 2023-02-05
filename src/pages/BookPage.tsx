import {ScrollRestoration} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import Book from "../modules/book/Book"
import SocialButtons from "../components/socialButtons/SocialButtons"
import SubscribeNewsLetter from "../modules/subscribeNewsLetter/SubscribeNewsLetter"
import Similar from "../modules/book/components/similar/Similar"
import Footer from "../modules/footer/Footer"

const BookPage = () => {
	return (
		<Layout>
			<ScrollRestoration/>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<Book/>
				<SocialButtons/>
				<SubscribeNewsLetter/>
				<Similar/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default BookPage