import { useState, useEffect } from 'react'

export const useIsPortrait = () => {
	const [isPortrait, setIsPortrait] = useState<boolean>(true)

	useEffect(() => {
		const match = window.matchMedia('(min-height: 500px)')
		const changeState = (e: MediaQueryListEvent) => {
			setIsPortrait(e.matches)
		}

		match.addEventListener('change', changeState)

		setIsPortrait(screen.height >= 500)
		return () => {
			match.removeEventListener('change', changeState)
		}
	}, [])

	return { isPortrait }
}
