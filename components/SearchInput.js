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
        <label htmlFor="search" className="sr-only">
          Search by programming language
        </label>
        <input
          placeholder="search by programming langage"
          className="outline-none block flex-grow p-4 bg-background-light"
          onChange={handleChange}
          ref={inputRef}
          type="search"
          spellCheck="false"
          aria-label="search a hello world snippet by programming langage"
          id="search"
        />
        <button className="outline-none mx-4" onClick={handleClick} aria-label="clear search input field" role="button">
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
