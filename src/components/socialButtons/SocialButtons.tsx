import {Link} from "react-router-dom"

import Icon from "../../ui/icon/Icon"

import {socialList} from "./constants/socialList"
import styles from "./styles/SocialButtons.module.scss"

const SocialButtons = () => {
	return (
		<ul className={styles.group}>
			{socialList.map((social, index) =>
				<li key={index}>
					<Link to={social.to} target={'_blank'}>
						<Icon name={social.icon}/>
					</Link>
				</li>
			)}

			<li><Icon name={'dots'}/></li>
		</ul>
	)
}

export default SocialButtons