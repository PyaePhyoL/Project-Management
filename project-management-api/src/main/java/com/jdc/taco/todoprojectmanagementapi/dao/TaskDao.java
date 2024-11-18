package com.jdc.taco.todoprojectmanagementapi.dao;

import com.jdc.taco.todoprojectmanagementapi.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskDao extends JpaRepository<Task, Integer> {
}
