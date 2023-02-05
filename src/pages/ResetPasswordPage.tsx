import useProtectRouteAuth from "../hooks/useProtectRouteAuth"

import Layout from "../components/layout/Layout"
import Header from "../modules/header/Header"
import LayoutSection from "../components/layoutSection/LayoutSection"
import ResetPassword from "../modules/resetPassword/ResetPassword"
import Footer from "../modules/footer/Footer"

const ResetPasswordPage = () => {
	useProtectRouteAuth(false)

	return (
		<Layout>
			<Header/>
			<LayoutSection>
				<ResetPassword/>
			</LayoutSection>
			<Footer/>
		</Layout>
	)
}

export default ResetPasswordPage