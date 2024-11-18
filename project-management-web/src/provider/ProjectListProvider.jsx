import { createContext, useContext, useEffect, useState } from "react";
import { getAllProjects } from "../service/ProjectService";

const ProjectListContext = createContext();

export const ProjectListProvider = ({children}) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects().then(resp => setProjects(resp.data)
                        
        )
    }, []);

    return (
        <ProjectListContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectListContext.Provider>
    )
}

export const useProjectList = () => useContext(ProjectListContext);