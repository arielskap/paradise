import HolaMundo from '@components/HolaMundo'
import Layout from '@components/Layout'

const Index = () => {
	return (
		<Layout>
			<div className='flex items-center justify-center w-screen h-screen'>
				<HolaMundo />
			</div>
		</Layout>
	)
}

export default Index
