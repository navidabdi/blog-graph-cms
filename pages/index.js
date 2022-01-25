import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
const posts = [
  { title: 'React testing', excerpt: 'Learn React testing' },
  {
    title: 'React With Tailwind CSS',
    excerpt: 'Learn React With Tailwind CSS',
  },
]
export default function Home() {
  return (
    <>
      <Head>
        <title>Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
