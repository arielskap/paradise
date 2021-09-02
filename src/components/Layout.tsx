import Head from 'next/head'
import { NextSeo } from 'next-seo'

interface Props {
	title?: string
	children: React.ReactNode
}

const Layout = ({ children, title = 'Inicio 🚀' }: Props) => {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="/logo.png" rel="shortcut icon" />
				<link href="/logo.png" rel="icon" type="image/png" sizes="16x16" />
				<link href="/logo.png" rel="icon" type="image/png" sizes="32x32" />
				<link rel="apple-touch-icon" href="/logo.png" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<NextSeo
				title={title}
				description='This is a Paradise-App 🏞🛣🏖🏜⛰'
				canonical="http://localhost:3000"
			/>
			<main className="font-indieFlower">
				{children}
			</main>
		</div>
	)
}

export default Layout
