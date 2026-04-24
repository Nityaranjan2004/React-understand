import React from 'react'

function Button({ label, onClick }) {
  return (
    <button
        onClick={() => onClick(label)}
        className='bg-gray-600 hover:bg-gray-500 text-white p-4 rounded text-lg'
    >
        {label}
    </button>
  )
}

export default Button
