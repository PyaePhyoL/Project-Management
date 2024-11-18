import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useProjectList } from '../provider/ProjectListProvider'
import ListItem from './ListItem';

export default function SideBar() {
    const {projects} = useProjectList();


  return (
    <div className='w-1/4 bg-gray-900 rounded-se-2xl pt-20 px-8 space-y-8'>
        <Link to="/">
            <h1 className='text-3xl font-bold text-white'>YOUR PROJECTS</h1>
        </Link>
        <Button title="+ Add Project" link="/new-project"/>

        <ul className='space-y-3'>
            {
                projects.map(item => 
                <div key={item.id}>
                    <Link to={"/tasks/" + item.id}>
                    <ListItem key={item.id} title={item.title} />
                    </Link>
                </div>
                
            )
            }
        </ul>
    </div>
  )
}
