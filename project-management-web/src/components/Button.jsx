import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Button({title, link = "", ghost = false, clickFunc = null}) {

  const ghostClass = "bg-transparent min-w-24 py-2 px-4 rounded-lg text-gray-600 text-lg hover:cursor-pointer hover:bg-gray-200";
  const normalClass = "bg-gray-700 min-w-24 py-2 px-4 rounded-lg text-white text-lg hover:cursor-pointer hover:bg-gray-600"

  return (
    <div>
      <Link to={link} className='mt-4'>
        <button onClick={clickFunc} className={ghost ? ghostClass : normalClass}>
            {title}
        </button>
      </Link>
    </div>
  )
}
