export default function SearchInput({ search, setSearch }) {
  return (
    <div className="py-10 lg:py-20">
      <input
        placeholder="search"
        className="outline-none block w-full max-w-900 rounded mx-auto p-4 border border-accents-2 focus:border-highlight-purple"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
