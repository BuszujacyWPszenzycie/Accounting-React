import Center from './Center'
import Sidebar from './Sidebar'

export default function Main({ children }) {
	return (
		<main className='main'>
			<Sidebar></Sidebar>
			<Center></Center>
		</main>
	)
}
