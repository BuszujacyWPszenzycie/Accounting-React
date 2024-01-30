import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CenterMenuItem({ children, iconName }) {
	return (
		<div className='center__menu--wrapper'>
			<FontAwesomeIcon icon={iconName} className='center__menu--expanded' />
		</div>
	)
}
