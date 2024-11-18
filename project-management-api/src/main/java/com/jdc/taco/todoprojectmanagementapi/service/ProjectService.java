package com.jdc.taco.todoprojectmanagementapi.service;

import com.jdc.taco.todoprojectmanagementapi.dao.ProjectDao;
import com.jdc.taco.todoprojectmanagementapi.dao.TaskDao;
import com.jdc.taco.todoprojectmanagementapi.dto.ProjectDto;
import com.jdc.taco.todoprojectmanagementapi.dto.ProjectForm;
import com.jdc.taco.todoprojectmanagementapi.dto.TaskDto;
import com.jdc.taco.todoprojectmanagementapi.dto.TaskForm;
import com.jdc.taco.todoprojectmanagementapi.entity.Project;
import com.jdc.taco.todoprojectmanagementapi.entity.Task;
import com.jdc.taco.todoprojectmanagementapi.util.EntityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ProjectService {

    private final ProjectDao projectDao;
    private final TaskDao taskDao;

    public List<ProjectDto> getAllProjects() {
        return projectDao.findAll().stream().map(EntityUtil::toProjectDto).toList();
    }

    public ProjectDto createProject(ProjectForm form) {
        Project project = new Project(form.title(), form.description(), form.startDate());
        return  EntityUtil.toProjectDto(projectDao.save(project));
    }

    public void deleteProjectById(int id) {
        projectDao.deleteById(id);
    }

    public ProjectDto getProjectById(int id) {
        return EntityUtil.toProjectDto(projectDao.findById(id).get());
    }

    public ProjectDto addTask(TaskForm form, int projectId) {
        var project = projectDao.findById(projectId).get();
        project.addTask(new Task(form.title()));
        return EntityUtil.toProjectDto(project);
    }

    public List<TaskDto> getAllTasksByProjectId(int projectId) {
        return projectDao.findById(projectId).get().getTasks().stream().map(EntityUtil::toTaskDto).toList();
    }

    public void deleteTaskById(int id) {
        taskDao.deleteById(id);
    }
}
