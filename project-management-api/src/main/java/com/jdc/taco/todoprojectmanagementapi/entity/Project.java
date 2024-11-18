package com.jdc.taco.todoprojectmanagementapi.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private LocalDate startDate;
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Task> tasks = new ArrayList<>();

    public Project(String title, String description, LocalDate startDate) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
    }

    public void addTask(Task task) {
        task.setProject(this);
        tasks.add(task);
    }
}
