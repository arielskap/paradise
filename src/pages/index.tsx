/* eslint-disable jsx-a11y/accessible-emoji */
import Image from 'next/image'
import { EffectCube, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'
import Layout from '@components/Layout'
import Logo from '@public/logo.png'
import Video from '@components/Video'

const Index = () => {
	return (
		<Layout title="Paradise 🏝">
			<div className='relative flex items-center justify-center min-h-screen bg-indigo-300'>
				<div className="w-full max-w-xl md:max-w-2xl">
					<Swiper modules={[EffectCube, Controller]} effect="cube" cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94
					}} loop>
						<SwiperSlide>
							<Video url="" title="Tenerife, España" />
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
					</Swiper>
				</div>
				<div className="absolute top-0 right-0 w-12 mr-2">
					<Image src={Logo} alt="La rosa de guadalupe" />
				</div>
				<div className="absolute top-0 left-0 w-12 ml-2">
					<Image src={Logo} alt="La rosa de guadalupe" />
				</div>
				<div className="absolute top-0 left-0 right-0">
					<p className="mt-2 text-center">*deslizar el dedo* UwU 🥵</p>
				</div>
				<div className="absolute bottom-0 left-0 w-full h-8">
					<ReactPlayer width="100%" height="100%" url="/guadalupe.mp3" controls />
				</div>
			</div>
		</Layout>
	)
}

export default Index
