import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

import { getPost } from '../services'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-8 px-10">
        <h1>Home</h1>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPost()) || []
  return {
    props: { posts },
  }
}
