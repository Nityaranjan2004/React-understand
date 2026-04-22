import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PostContext } from '../context/PostContext'

function PostCard({post}) {
    const { deletePost } = useContext(PostContext);
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h3>{post.title}</h3>

      <div className="mt-2 space-x-3">
        <Link to={`/post/${post.id}`}>View</Link>
        <Link to={`/edit/${post.id}`}>Edit</Link>

        <button onClick={() => deletePost(post.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PostCard
