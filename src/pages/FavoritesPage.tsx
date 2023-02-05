import {ScrollRestoration} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import Title from "../ui/title/Title"
import Favorites from "../modules/favorites/Favorites"
import Footer from "../modules/footer/Footer"

const FavoritesPage = () => {
	return (
		<Layout>
			<ScrollRestoration/>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<Title title={'Favorites'}/>
				<Favorites/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default FavoritesPage