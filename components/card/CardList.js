import Card from "./Card"

export default function CardList({ posts }) {
  return (
    <div className="pt-10 pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card title={post.title} content={post.content} key={post.id} index={index} />
        ))}
      </div>
    </div>
  )
}
