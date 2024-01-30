import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CenterMenuItem({ children, iconName, hoverTitle, onClick }) {
	return (
		<div className='center__menu--expandedWrapper' onClick={onClick}>
			<FontAwesomeIcon icon={iconName} className='center__menu--expandedIcon' />
			<div className='center__menu--expendedHover'>{hoverTitle}</div>
		</div>
	)
}
