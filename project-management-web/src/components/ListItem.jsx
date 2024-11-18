import React from 'react'

export default function ListItem({title}) {
  return (
    <div className='text-white text-xl font-semibold px-2 py-2 rounded-md hover:bg-gray-600 hover:cursor-pointer'>
        {title}
    </div>
  )
}
