export default function NavToggle({ isNavActive, setIsNavActive }) {
  return (
    <button className="nav-toggle" type="button" onClick={() => setIsNavActive(!isNavActive)}>
      <span className={isNavActive ? "active nav-toggle__inner" : "nav-toggle__inner"}></span>
    </button>
  )
}
