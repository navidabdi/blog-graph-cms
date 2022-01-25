import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.exerpt}</p>
    </div>
  )
}

export default PostCard
