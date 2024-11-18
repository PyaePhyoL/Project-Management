package com.jdc.taco.todoprojectmanagementapi.util;

import com.jdc.taco.todoprojectmanagementapi.dto.ProjectDto;
import com.jdc.taco.todoprojectmanagementapi.dto.TaskDto;
import com.jdc.taco.todoprojectmanagementapi.entity.Project;
import com.jdc.taco.todoprojectmanagementapi.entity.Task;
import org.springframework.beans.BeanUtils;

public class EntityUtil {

    public static ProjectDto toProjectDto(Project project) {
        ProjectDto projectDto = new ProjectDto();
        BeanUtils.copyProperties(project, projectDto);
        return projectDto;
    }

    public static Project toProject(ProjectDto projectDto) {
        Project project = new Project();
        BeanUtils.copyProperties(projectDto, project);
        return project;
    }

    public static TaskDto toTaskDto(Task task) {
        return new TaskDto(task.getId(), task.getTitle());
    }
}
