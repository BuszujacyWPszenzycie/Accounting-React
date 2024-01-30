import MenuItem from './MenuItem'
import { faHouse, faHandHoldingDollar, faCoins, faSackDollar, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({ children }) {
	return (
		<aside className='sidebar'>
			<MenuItem iconName={faHouse} title='Pulpit'></MenuItem>
			<MenuItem iconName={faHandHoldingDollar} title='Przychody'></MenuItem>
			<MenuItem iconName={faCoins} title='Koszty'></MenuItem>
			<MenuItem iconName={faSackDollar} title='Podatek'></MenuItem>
			<MenuItem iconName={faPiggyBank} title='ZUS'></MenuItem>
		</aside>
	)
}
