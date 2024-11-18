import axios from "axios";

const BASE_URL = "http://localhost:8080/projects/";

export const getAllProjects = () => axios.get(BASE_URL + "all");
export const createProject = (project) => axios.post(BASE_URL + "add-new", project);
export const deleteProjectById = (id) => axios.delete(BASE_URL + "delete/" + id);
export const getProjectById = (id) => axios.get(BASE_URL + id);
export const addTask = (task, id) => axios.put(BASE_URL + "add-task/" + id, task);
export const deleteTask = (id) => axios.delete(BASE_URL + "delete/task/" + id);