import {ScrollRestoration} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import Showcase from "../modules/showcase/Showcase"
import SubscribeNewsLetter from "../modules/subscribeNewsLetter/SubscribeNewsLetter"
import Footer from "../modules/footer/Footer"

const SearchPage = () => {
	return (
		<Layout>
			<ScrollRestoration/>
			<Header/>
			<LayoutSection>
				<Showcase/>
				<SubscribeNewsLetter/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default SearchPage