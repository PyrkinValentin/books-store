import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import Title from "../ui/title/Title"
import Cart from "../modules/cart/Cart"
import Footer from "../modules/footer/Footer"

const CartPage = () => {
	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<Title title={'Your cart'}/>
				<Cart/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default CartPage