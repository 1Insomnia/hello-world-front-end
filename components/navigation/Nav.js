import Link from "next/link"

export default function Nav({ isActive }) {
  return (
    <nav className={isActive ? "active nav" : "nav"} aria-label="main navigation">
      <Link href="/">
        <a className="nav-link" aria-label="link to homepage">
          Home
        </a>
      </Link>
      <Link href="mailto:jeremy.pro.lp@gmail.com">
        <a className="nav-link" aria-label="open contact email">
          Contact
        </a>
      </Link>
      <Link href="https://en.wikibooks.org/wiki/Computer_Programming/Hello_world">
        <a className="nav-link" target="_blank" aria-label="open new tab to wikipedia list of hello world">
          Source
        </a>
      </Link>
    </nav>
  )
}
