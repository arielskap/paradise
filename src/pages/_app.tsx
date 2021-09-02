import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo-config'
import '../styles/global.css'
import 'swiper/css'
import 'swiper/css/effect-cube'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
