import React from 'react'
import Header from "./Header"
function Layout({children}) {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Header/>
      <div className='p-6'>{children}</div>
    </div>
  )
}

export default Layout
