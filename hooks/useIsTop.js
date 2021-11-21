import { useState, useEffect } from "react"

const useIsTop = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTop(true) : setIsTop(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {
    isTop,
  }
}

export default useIsTop
