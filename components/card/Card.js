export default function Card({ langage, code }) {
  return (
    <div className="p-4 shadow-lg rounded transition duration-200 ease hover:shadow-xl">
      <h3 className="font-semibold mb-4">{langage}</h3>
      <code>{code.code}</code>
    </div>
  )
}
