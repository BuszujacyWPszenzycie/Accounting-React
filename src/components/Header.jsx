import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faBell, faList, faRightToBracket, faGear } from '@fortawesome/free-solid-svg-icons'

export default function Header({ children }) {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<FontAwesomeIcon icon={faCoins} className='header__icon' />
				<h1 className='header__title'>Księgowość ABC</h1>
			</div>
			<div className='header__wrapper'>
				<FontAwesomeIcon icon={faBell} className='header__icon header__icon--right' />
				<FontAwesomeIcon icon={faGear} className='header__icon header__icon--right' />
				<FontAwesomeIcon icon={faRightToBracket} className='header__icon header__icon--right' />
			</div>
		</header>
	)
}
