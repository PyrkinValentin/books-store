import {ScrollRestoration} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import BookAbout from "../modules/bookAbout/BookAbout"
import SubscribeNewsLetter from "../modules/subscribeNewsLetter/SubscribeNewsLetter"
import BooksSimilar from "../modules/bookAbout/components/booksSimilar/BooksSimilar"
import Footer from "../modules/footer/Footer"

const Book = () => {
	return (
		<Layout>
			<ScrollRestoration/>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<BookAbout/>
				<SubscribeNewsLetter/>
				<BooksSimilar/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default Book