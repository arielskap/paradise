interface Props {
	url: string
	title: string
}

const Video = ({ url, title }: Props) => {
	return (
		<div className="relative w-full border border-black h-72 rounded-xl bg-video">
			<video className="w-full h-full lazy" playsInline preload="auto" autoPlay loop muted>
				<source src={url} type="video/mp4"/>
				Your browser does not support the video tag.
			</video>
			<h2 className="absolute bottom-0 left-0 w-full p-2 text-xl font-bold text-center text-white bg-black bg-opacity-50 rounded-b-xl">{title}</h2>
		</div>
	)
}

export default Video
