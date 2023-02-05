import {Tab, TabList, TabPanel, Tabs} from "react-tabs"

import Login from "./components/login/Login"
import Register from "./components/register/Register"

import styles from "./styles/Authorization.module.scss"

const Authorization = () => {
	return (
		<div className={styles.container}>
			<Tabs
				className={styles.tabs}
				selectedTabClassName={styles.tabs__active}
				selectedTabPanelClassName={styles.tabs__panel}
				focusTabOnClick={false}
			>
				<TabList className={styles.tabs__list}>
					<Tab>SIGN IN</Tab>
					<Tab>SIGN UP</Tab>
				</TabList>

				<TabPanel>
					<Login/>
				</TabPanel>

				<TabPanel>
					<Register/>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Authorization