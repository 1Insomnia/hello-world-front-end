import { useRouter } from "next/router"

export default function ErrorMessage({ message }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.reload()
  }

  return (
    <div className=" text-purple py-10 text-center flex flex-col items-center justify-center bg-error-lighter max-w-900 mx-auto">
      <div className="text-lg font-semibold mb-4">{message}</div>
      <div className="mb-8">Try reloading the page</div>
      <buttton onClick={handleClick} className="btn-primary">
        <span>Reload</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </buttton>
    </div>
  )
}
