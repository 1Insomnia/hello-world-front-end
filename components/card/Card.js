export default function Card({ title, content }) {
  return (
    <div
      className="border border-accents-2 p-4 shadow-sm rounded bg-background-light transition-all duration-200 hover:shadow-lg hover:scale-105"
      style={{
        height: "auto",
        overflowY: "auto",
      }}
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      <code>{content}</code>
    </div>
  )
}
