package com.jdc.taco.todoprojectmanagementapi.api;

import com.jdc.taco.todoprojectmanagementapi.dto.ProjectDto;
import com.jdc.taco.todoprojectmanagementapi.dto.ProjectForm;
import com.jdc.taco.todoprojectmanagementapi.dto.TaskDto;
import com.jdc.taco.todoprojectmanagementapi.dto.TaskForm;
import com.jdc.taco.todoprojectmanagementapi.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/projects")
@CrossOrigin("*")
public class ProjectApi {

    private final ProjectService projectService;

    @GetMapping("/all")
    public List<ProjectDto> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public ProjectDto getProjectById(@PathVariable int id) {
        return projectService.getProjectById(id);
    }

    @PostMapping("/add-new")
    public ProjectDto addNewProject(@RequestBody ProjectForm form) {
        return projectService.createProject(form);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProject(@PathVariable int id) {
        projectService.deleteProjectById(id);
    }

    @PutMapping("/add-task/{id}")
    public ProjectDto addTask(@PathVariable int id, @RequestBody TaskForm form) {
       return projectService.addTask(form, id);
    }

    @GetMapping("/{id}/tasks")
    public List<TaskDto> getTasksByProjectId(@PathVariable int id) {
        return projectService.getAllTasksByProjectId(id);
    }

    @DeleteMapping("/delete/task/{id}")
    public void deleteTask(@PathVariable int id) {
        projectService.deleteTaskById(id);
    }
}
