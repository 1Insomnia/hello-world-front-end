export default function Card({ title, content }) {
  return (
    <div className="border border-accents-2 p-4 shadow-lg rounded transition duration-200 ease transform hover:-translate-y-2 hover:shadow-xl">
      <h3 className="font-semibold mb-4">{title}</h3>
      <code>{content}</code>
    </div>
  )
}
