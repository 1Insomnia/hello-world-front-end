import { useState } from "react"

export default function NavToggle({ isActive, setIsActive }) {
  return (
    <button className="nav-toggle" type="button" onClick={() => setIsActive(!isActive)}>
      <span className={isActive ? "active nav-toggle__inner" : "nav-toggle__inner"}></span>
    </button>
  )
}
