import { useState } from "react"
import { supabase } from "../utils/supabaseClient"
import Head from "next/head"
import useIsTop from "../hooks/useIsTop"

// Components
import HomeHero from "../components/HomeHero"
import CardList from "../components/card/CardList"
import SearchInput from "../components/SearchInput"
import Header from "../components/navigation/Header"
import ErrorMessage from "../components/error/ErrorMessage"
import Paginate from "../components/Paginate"

export default function Home({ posts, error, length }) {
  const [search, setSearch] = useState("")
  const [isNavActive, setIsNavActive] = useState(false)
  const { isTop } = useIsTop()
  const [page, setPage] = useState({
    first: 0,
    last: 20,
  })

  let dataSet = []
  search.trim() !== ""
    ? (dataSet = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase())))
    : (dataSet = posts.slice(page.first, page.last))

  return (
    <>
      <Head>
        <title>Hello World - Homepage</title>
        <meta property="og:title" content="Hello World - Homepage" key="title" />
        <meta
          name="description"
          content="Hello World snippets displayed in many programming langages. If you love programming come checkout some snippets for fun."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header isNavActive={isNavActive} setIsNavActive={setIsNavActive} isTop={isTop} />
      <section id="homepage">
        <div className="container">
          <HomeHero />
          <SearchInput setSearch={setSearch} />
          {!error ? <CardList posts={dataSet} /> : <ErrorMessage message={error} />}
          <Paginate page={page} setPage={setPage} length={length} />
        </div>
      </section>
    </>
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
        length: posts.length,
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
