package com.jdc.taco.todoprojectmanagementapi.dto;

import java.time.LocalDate;

public record ProjectForm(
        String title,
        String description,
        LocalDate startDate
) {
}
