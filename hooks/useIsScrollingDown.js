import { useState, useEffect } from "react"

const useIsScrollingDown = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      let st = window.scrollY
      st > lastScrollTop ? setIsScrollingDown(true) : setIsScrollingDown(false)
      lastScrollTop = st <= 0 ? 0 : st
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {
    isScrollingDown,
  }
}

export default useIsScrollingDown
