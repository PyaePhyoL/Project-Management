package com.jdc.taco.todoprojectmanagementapi.dto;

import com.jdc.taco.todoprojectmanagementapi.entity.Task;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProjectDto {
    private int id;
    private String title;
    private String description;
    private LocalDate startDate;
    private List<Task> tasks;
}
