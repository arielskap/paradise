/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/accessible-emoji */
import Image from 'next/image'
import { EffectCube, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '@components/Layout'
import Logo from '@public/logo.png'
import Video from '@components/Video'
import { useIsPortrait } from 'src/hooks/useIsPortrait'

const Index = () => {
	const { isPortrait } = useIsPortrait()
	return (
		<Layout title="Paradise 🏝">
			{isPortrait
				? (
					<div className="flex items-center justify-center min-h-screen bg-indigo-100">
						<p className="text-xl font-bold">Ponelo de costado bro</p>
					</div>
				)
				: (
					<div className='relative flex items-center justify-center min-h-screen bg-indigo-300'>
						<div className="w-full max-w-xl md:max-w-2xl">
							<Swiper modules={[EffectCube, Controller]} effect="cube" cubeEffect={{
								shadow: true,
								slideShadows: true,
								shadowOffset: 20,
								shadowScale: 0.94
							}}>
								<SwiperSlide>
									<div className="relative flex flex-col items-center justify-center w-full border border-black h-72 rounded-xl bg-video">
										<h1 className="text-3xl font-bold text-center">💖 ¡Para incentivarte a que viajes! 💖</h1>
										<p className="mt-2 text-2xl font-semibold text-center">*deslizar el dedo* UwU 🥵</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/tenerifeSpain.mp4" title="Tenerife, España" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/antartica.mp4" title="Antartica" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/piramideMexico.mp4" title="Chichén Itzá, México" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/fiordosNoruega.mp4" title="Fiordos, Noruega" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/granCanonEeuu.mp4" title="Gran Cañon, EEUU" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/guadalupe.mp4" title="Isla Guadalupe, México" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/desiertoAntartico.mp4" title="Desierto Antartico" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/selvaAmazonica.mp4" title="Selva Amazonica" />
								</SwiperSlide>
								<SwiperSlide>
									<Video url="/cenoteMexico.mp4" title="Un Cenote, México" />
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="absolute top-0 right-0 w-12 mr-2">
							<Image src={Logo} alt="La rosa de guadalupe" />
						</div>
						<div className="absolute top-0 left-0 w-12 ml-2">
							<Image src={Logo} alt="La rosa de guadalupe" />
						</div>
						<div className="absolute bottom-0 left-0 w-full h-8">
							<audio className="w-full h-full" controls>
								<source src="guadalupeAudio.mp3" type="audio/mp3"/>
							Your browser does not support the audio element.
							</audio>
						</div>
					</div>
				)}
		</Layout>
	)
}

export default Index
