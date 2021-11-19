import { useState } from "react"
import { supabase } from "../utils/supabaseClient"
import Link from "next/link"

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
  const dataSet = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
  console.log(posts)

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

export async function getServerSideProps() {
  try {
    let { data: posts, error } = await supabase.from("posts").select()
    if (!posts) throw new Error(error)
    return {
      props: {
        posts: posts,
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        posts: [],
        error: error.message,
      },
    }
  }
}
