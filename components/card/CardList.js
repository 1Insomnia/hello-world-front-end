import Card from "./Card"

export default function CardList({ posts }) {
  return (
    <div className="py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card langage={post.langage} code={post.code} key={post._id} />
        ))}
      </div>
    </div>
  )
}
