import React from 'react'
import icon from '../assets/office-svgrepo-com.svg'
import Button from '../components/Button'

export default function NoProjectSelectedPage() {
  return (
    <section className='text-center mx-auto mt-40 space-y-6' >
        <img src={icon} alt="Icon" className="mx-auto w-20 h-20" />
        <h1 className="text-2xl text-gray-500 font-bold">No Project Selected</h1>
        <p className="text-lg text-gray-400">Select a project or get started with a new one</p>
        <Button title="Create new project" link="/new-project"/>
    </section>
  )
}
