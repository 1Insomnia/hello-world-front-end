export default function ScrollTopBtn() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
  }

  return (
    <button
      role="button"
      aria-label="scroll to the top of the page"
      onClick={scrollToTop}
      className="scroll-top-btn flex items-center justify-center h-12 w-12"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
