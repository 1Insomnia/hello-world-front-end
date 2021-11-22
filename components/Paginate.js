import Link from "next/link"

export default function Paginate({ page, setPage, length }) {
  const handlePrevious = (e) => {
    e.preventDefault()
    if (page.first >= 20 && page.last >= 40) {
      setPage({
        first: page.first - 20,
        last: page.last - 20,
      })
    }
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (page.last <= length) {
      setPage({
        first: page.first + 20,
        last: page.last + 20,
      })
    }
  }

  const handleFirst = (e) => {
    e.preventDefault()
    setPage({
      first: 0,
      last: 20,
    })
  }

  return (
    <div className="pt-5 pb-10">
      <div className="flex items-center justify-between">
        <button onClick={handlePrevious}>
          <a className="text-success flex items-center space-x-2 hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="block">Previous</span>
          </a>
        </button>
        <button onClick={handleNext}>
          <a className="text-success flex items-center space-x-2 hover:opacity-80">
            <span className="block">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </button>
      </div>
    </div>
  )
}
