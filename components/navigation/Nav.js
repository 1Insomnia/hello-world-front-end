import Link from "next/link"

export default function Nav({ isActive }) {
  return (
    <nav className={isActive ? "active nav" : "nav"}>
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>
      <Link href="/">
        <a className="nav-link">Contact</a>
      </Link>
      <Link href="/">
        <a className="nav-link">Code</a>
      </Link>
      <Link href="/">
        <a className="nav-link">Source</a>
      </Link>
    </nav>
  )
}
