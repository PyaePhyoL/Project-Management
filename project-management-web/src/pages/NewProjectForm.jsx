import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import { useProjectList } from '../provider/ProjectListProvider';
import { createProject, getAllProjects } from '../service/ProjectService';

export default function NewProjectForm() {

    const titleRef = useRef();
    const dateRef = useRef();
    const descRef = useRef();

    const {projects, setProjects} = useProjectList();

    function handleSubmit() {
        const project = {
            title: titleRef.current.value,
            startDate: dateRef.current.value,
            description: descRef.current.value,
        }

        createProject(project).then(() => 
            getAllProjects().then(resp => setProjects(resp.data)));
    }

  return (
    <section className='w-3/5 mt-20'>
        <div className="flex justify-end space-x-2">
            <Button title="Cancle" link="" ghost />
            <Button clickFunc={handleSubmit} title="Save" link="/"/>
        </div>

        <form className="space-y-8 mt-5">
            <div className="mb-3 space-y-2">
                <label className="block font-semibold text-gray-500"> TITLE </label>
                <input ref={titleRef} type="text" className="block border-b-2 border-gray-300 bg-gray-200 rounded-md px-3 py-1 w-full text-gray-600 text-lg" />
            </div>
            <div className="mb-3 space-y-2">
                <label className="block font-semibold text-gray-500"> DESCRIPTION </label>
                <textarea ref={descRef} type="text" className="block border-b-2 border-gray-300 bg-gray-200 rounded-md px-3 py-1 w-full text-gray-600 text-lg" />
            </div>
            <div className="mb-3 space-y-2">
                <label className="block font-semibold text-gray-500"> DUE DATE </label>
                <input ref={dateRef} type="date" className="block border-b-2 border-gray-300 bg-gray-200 rounded-md px-3 py-1 w-full text-gray-600 text-lg" />
            </div>
        </form>
        
    </section>
  )
}
