import { sanityClient } from "../lib/sanity"

// Components
import HomeTitle from "../components/HomeTitle"
import CardList from "../components/card/CardList"
import SearchInput from "../components/SearchInput"

export default function Home({ posts, error }) {
  return (
    <section className="">
      <div className="container">
        <HomeTitle />
        <SearchInput />
        {!error ? <CardList posts={posts} /> : <div>{error}</div>}
      </div>
    </section>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "post"] | order(langage asc){_id, langage, code}'
  const posts = await sanityClient.fetch(query)

  if (!posts.length > 0) {
    return {
      props: {
        posts: [],
        error: "Posts could not be fetch",
      },
    }
  } else {
    return {
      props: {
        posts,
        error: null,
      },
    }
  }
}
