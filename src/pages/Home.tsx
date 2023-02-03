import {ScrollRestoration} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import BookShowcase from "../modules/bookShowcase/BookShowcase"
import SubscribeNewsLetter from "../modules/subscribeNewsLetter/SubscribeNewsLetter"
import Footer from "../modules/footer/Footer"

const Home = () => {
	return (
		<Layout>
			<ScrollRestoration/>
			<Header/>
			<LayoutSection>
				<BookShowcase/>
				<SubscribeNewsLetter/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default Home