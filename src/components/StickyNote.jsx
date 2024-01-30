import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function StickyNote({}) {
	return (
		<>
			<div className='stickyNote__header'>
				<p className='stickyNote__title'>Notatka</p>
				<FontAwesomeIcon icon={faXmark} className='stickyNote__icon' />
			</div>
			<textarea name='' id='' className='stickyNote__textarea'></textarea>
		</>
	)
}
