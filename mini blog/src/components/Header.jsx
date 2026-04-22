import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between'>
      <h1 className="font-bold">Blog App</h1>


        <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Post</Link>
      </div>


    </div>
  )
}

export default Header
