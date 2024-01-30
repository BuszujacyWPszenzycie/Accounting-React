import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuItem({ title, children, iconName, ...props }) {
	return (
		<div className='menu__item--wrapper'>
			<FontAwesomeIcon icon={iconName} className='menu__icon' />
			<h2 className='menu__title'>{title}</h2>
		</div>
	)
}
