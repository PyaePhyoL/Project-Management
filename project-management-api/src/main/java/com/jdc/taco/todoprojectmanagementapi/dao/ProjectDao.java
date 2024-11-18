package com.jdc.taco.todoprojectmanagementapi.dao;

import com.jdc.taco.todoprojectmanagementapi.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectDao extends JpaRepository<Project, Integer> {
}
