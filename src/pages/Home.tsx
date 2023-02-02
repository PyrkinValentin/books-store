import Header from "../modules/header/Header"
import BookShowcase from "../modules/bookShowcase/BookShowcase"
import SubscribeNewsLetter from "../components/subscribeNewsLetter/SubscribeNewsLetter"
import Footer from "../modules/footer/Footer"

const Home = () => {
	return (
		<>
			<Header/>
			<BookShowcase/>
			<SubscribeNewsLetter/>
			<Footer/>
		</>
	)
}

export default Home