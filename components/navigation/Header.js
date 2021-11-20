import Nav from "./Nav"
import NavToggle from "./NavToggle"
import ScrollTopBtn from "./ScrollTopBtn"

export default function Header({ isNavActive, setIsNavActive, isScrollingDown }) {
  return (
    <>
      <header
        className={!isScrollingDown ? "fixed top-0 left-0 w-full bg-background shadow-lg" : "hidden"}
        id="site-header"
        role="navigation"
      >
        <div className="h-16 container flex items-center justify-between">
          <NavToggle isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
          <h4 className="logo" aria-label="site name">
            HW!
          </h4>
          <ScrollTopBtn />
        </div>
        {isNavActive && <Nav />}
      </header>
    </>
  )
}
