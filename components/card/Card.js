export default function Card({ title, content }) {
  return (
    <div
      className="border border-accents-2 p-4 shadow-sm rounded bg-background-light transition-all duration-200 hover:shadow-lg hover:scale-105"
      aria-label={`card displaying a hello world snippet in ${title} programming langage`}
      style={{
        height: "auto",
        overflowY: "auto",
      }}
    >
      <h3 className="font-semibold mb-4" aria-label="card title">
        {title}
      </h3>
      <code aria-label="card code snippet">{content}</code>
    </div>
  )
}
