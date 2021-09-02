import ReactPlayer from 'react-player'

interface Props {
	url: string
	title: string
}

const Video = ({ url, title }: Props) => {
	return (
		<div className="relative w-full border border-black h-72 rounded-xl bg-video">
			<ReactPlayer width="100%" height="100%" url={url} muted playing loop />
			<h2 className="absolute bottom-0 left-0 w-full p-2 text-xl font-bold text-center text-white bg-black bg-opacity-50">{title}</h2>
			<style jsx>{`
				.bg-video {
					background-image: radial-gradient(circle at 12.5% 12.5%, #fe8643 0, #ff7a46 10%, #ff6d4a 20%, #ff5e4e 30%, #ff4d53 40%, #ff3858 50%, #fb1a5e 60%, #f70066 70%, #f1006f 80%, #ea0079 90%, #e20084 100%);
				}
			`}</style>
		</div>
	)
}

export default Video
