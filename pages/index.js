import { sanityClient } from "../lib/sanity"

import { Grid, Card, Text } from "@geist-ui/react"

export default function Home({ posts }) {
  console.log(posts)
  return (
    <section className="spacing-lg">
      <div className="wrapper spacing-md">
        <h1 className="inktrap">Hello, World!</h1>
      </div>
      <div className="wrapper spacing-md">
        <Grid.Container gap={2}>
          {posts.map((post) => (
            <Grid xs={24} md={12} lg={8} key={post._id}>
              <Card shadow width="100%">
                <Text h3>{post.langage}</Text>
                <code>{post.code.code}</code>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </section>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "post"]'
  const posts = await sanityClient.fetch(query)

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}
