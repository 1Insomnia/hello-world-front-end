import { useState } from "react"
import { supabase } from "../utils/supabaseClient"
import Link from "next/link"

// Components
import HomeHero from "../components/HomeHero"
import CardList from "../components/card/CardList"
import SearchInput from "../components/SearchInput"
import ErrorMessage from "../components/error/ErrorMessage"

export default function Home({ posts, error }) {
  const [search, setSearch] = useState("")
  const dataSet = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <section className="">
      <div className="container">
        <HomeHero />
        <SearchInput setSearch={setSearch} />
        {!error ? <CardList posts={dataSet} /> : <ErrorMessage message={error} />}
      </div>
    </section>
  )
}

export async function getStaticProps() {
  try {
    let { data: posts, error } = await supabase.from("posts").select()
    if (!posts) throw new Error("Data could not be fetched")
    if (posts.length === 0) throw new Error("Data could not be fetched")
    return {
      props: {
        posts: posts,
        error: error,
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
