import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faNoteSticky, faHandHoldingDollar, faCoins, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import CenterMenuItem from './CenterMenuItem'
import { useState } from 'react'
import StickyNote from './StickyNote'

export default function Center({ children }) {
	const [openMenu, setOpenMenu] = useState(false)
	const [listOfStickyNotes, setListOfStickyNotes] = useState([])

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	const handleAddStickyNote = () => {
		const updatedListOfNotes = [...listOfStickyNotes, <StickyNote></StickyNote>]
		setListOfStickyNotes(updatedListOfNotes)
	}

	const handleRemoveStickyNote = index => {
		const updatedListOfNotes = [...listOfStickyNotes]
		updatedListOfNotes.splice(index, 1) // Remove item at index
		setListOfStickyNotes(updatedListOfNotes)
	}

	let showMenu = (
		<div className='center__menu'>
			<div className='center__menu--addWrapper' onClick={toggleMenu}>
				<FontAwesomeIcon icon={faPlus} className='center__menu--addIcon' />
			</div>
		</div>
	)

	if (openMenu) {
		showMenu = (
			<div className='center__menu'>
				<CenterMenuItem iconName={faNoteSticky} hoverTitle='Dodaj notatkę' onClick={handleAddStickyNote} />
				<CenterMenuItem iconName={faHandHoldingDollar} hoverTitle='Dodaj przychód'></CenterMenuItem>
				<CenterMenuItem iconName={faCoins} hoverTitle='Dodaj wydatek'></CenterMenuItem>
				<CenterMenuItem iconName={faPiggyBank} hoverTitle='Dodaj ZUS'></CenterMenuItem>
				<div className='center__menu--addWrapper' onClick={toggleMenu}>
					<FontAwesomeIcon icon={faPlus} className='center__menu--addIcon' />
				</div>
			</div>
		)
	}

	return (
		<section className='center'>
			<div className='center__shadow'></div>
			{listOfStickyNotes.map((item, index) => (
				<div key={index} className='stickyNote__wrapper' onClick={() => handleRemoveStickyNote(index)}>
					{item}
				</div>
			))}
			{showMenu}
		</section>
	)
}
