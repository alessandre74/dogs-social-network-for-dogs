import React from 'react'

const useMedia = media => {
  const [math, setMatch] = React.useState(null)

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return math
}

export default useMedia
