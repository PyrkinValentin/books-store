import useProtectRouteAuth from "../hooks/useProtectRouteAuth"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import Authorization from "../modules/authorization/Autorization"
import Footer from "../modules/footer/Footer"

const LoginPage = () => {
	useProtectRouteAuth(false)

	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<Authorization/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default LoginPage