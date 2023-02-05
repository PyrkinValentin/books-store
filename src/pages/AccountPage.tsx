import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import GoBack from "../components/goBack/GoBack"
import Title from "../ui/title/Title"
import Account from "../modules/account/Account"
import Footer from "../modules/footer/Footer"

const AccountPage = () => {
	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<GoBack/>
				<Title title={'Account'}/>
				<Account/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default AccountPage