import React from 'react'

function Display({value}) {
  return (
   <input
    value={value}
    readOnly
    className='w-full p-3 text-right text-2xl bg-gray-700 text-white rounded'
   />
  )
}

export default Display
