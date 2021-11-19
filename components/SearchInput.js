import { useRef } from "react"

export default function SearchInput({ setSearch }) {
  const inputRef = useRef()

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    inputRef.current.value = ""
    setSearch("")
  }

  return (
    <div className="py-10 lg:py-20">
      <div className="bg-background-light w-full max-w-900 rounded mx-auto flex border border-accents-2 focus-within:border-purple overflow-hidden">
        <input
          placeholder="search"
          className="outline-none block flex-grow p-4 bg-background-light"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="outline-none mx-4" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
