import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faNoteSticky, faHandHoldingDollar, faCoins, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import CenterMenuItem from './CenterMenuItem'
import { useState } from 'react'

export default function Center({ children }) {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	let showMenu = (
		<div className='center__menu'>
			<div className='center__menu--add' onClick={toggleMenu}>
				<FontAwesomeIcon icon={faPlus} className='center__menu--icon' />
			</div>
		</div>
	)

	if (openMenu) {
		showMenu = (
			<div className='center__menu'>
				<CenterMenuItem iconName={faNoteSticky} />
				<CenterMenuItem iconName={faHandHoldingDollar}></CenterMenuItem>
				<CenterMenuItem iconName={faCoins}></CenterMenuItem>
				<CenterMenuItem iconName={faPiggyBank}></CenterMenuItem>
				<div className='center__menu--add' onClick={toggleMenu}>
					<FontAwesomeIcon icon={faPlus} className='center__menu--icon' />
				</div>
			</div>
		)
	}

	return (
		<section className='center'>
			<div className='center__shadow'></div>
			{showMenu}
		</section>
	)
}
