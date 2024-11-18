import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useProjectList } from "../provider/ProjectListProvider";
import TasksBox from "../components/TasksBox";
import { addTask, deleteProjectById, deleteTask, getAllProjects, getProjectById } from "../service/ProjectService";
import { CircularProgress } from "@mui/material";

export default function ProjectPage() {

  const { id } = useParams();
  const {setProjects} = useProjectList();
  const inputRef = useRef();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id).then(resp => setProject(resp.data))
  }, [id])

  const formattedDate = new Date(project?.startDate).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  function handleAddTask() {
    const task = {
      title : inputRef.current.value
    }

    if(task.title) {
      inputRef.current.value = '';
      addTask(task, project.id).then(resp => setProject(resp.data));
    }    
  }

  function handleDelete(id) {
    deleteProjectById(id)
    .then(() => getAllProjects().then(resp => setProjects(resp.data)));
  }

  function handleTaskClear(id) {
    deleteTask(id).then(() => getProjectById(project.id)
    .then(resp => {
      console.log(resp.data);
      setProject(resp.data);
    }))
    
}

  return (
    
      (project) ?
      <section className="w-3/5 mt-20 space-y-3">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-gray-500">{project.title}</h1>
            <Button title="Delete" link="/" ghost 
                clickFunc={() => handleDelete(project.id)}/>
          </div>

          <h2 className="text-lg text-gray-400">{formattedDate}</h2>

          <p className="text-lg text-gray-500">
            {project.description}
          </p>

          <div className="bg-gray-300 my-3 h-0.5 w-full"></div>

          <h1 className="text-3xl font-semibold text-gray-500"> Tasks </h1>

          <div className="flex space-x-2">
            <input ref={inputRef} type="text" className="border-b-2 border-gray-300 bg-gray-200 rounded-md px-3 py-1 w-1/2 text-gray-600 text-lg" />
            <Button title="Add Task" link="" clickFunc={handleAddTask} ghost />
          </div>
          {
                (project.tasks.length === 0) 
                ? <p>This project does not have any tasks yet.</p> 
                : 
                <TasksBox tasks={project.tasks} clearFunc={handleTaskClear}/>
              }
      </section>
      :
      <CircularProgress />
      
    
    
  );
}
