import { useState } from "react"
import Link from "next/link"
import { sanityClient } from "../lib/sanity"

// Components
import HomeHero from "../components/HomeHero"
import CardList from "../components/card/CardList"
import SearchInput from "../components/SearchInput"

const ErrorMessage = ({ message }) => (
  <div className=" text-highlight-purple py-10 text-center">
    <div className="text-lg font-semibold mb-4">{message}</div>
    <Link href="/">
      <a>Try reloading the page</a>
    </Link>
  </div>
)

export default function Home({ posts, error }) {
  const [search, setSearch] = useState("")
  const dataSet = posts.filter((post) => post.langage.toLowerCase().includes(search.toLowerCase()))

  return (
    <section className="">
      <div className="container">
        <HomeHero />
        <SearchInput search={search} setSearch={setSearch} />
        {!error ? <CardList posts={dataSet} /> : <ErrorMessage message={error} />}
      </div>
    </section>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "post"] | order(langage asc){_id, langage, code}'
  try {
    const posts = await sanityClient.fetch(query)
    if (!posts || (posts && !posts.length > 0)) {
      throw new Error("No data could be fetched")
    }
    return {
      props: {
        posts,
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        posts: [],
        error: "Posts could not be fetch",
      },
    }
  }
}
