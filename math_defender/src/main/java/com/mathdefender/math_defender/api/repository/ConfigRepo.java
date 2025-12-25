package com.mathdefender.math_defender.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mathdefender.math_defender.api.models.ConfigModel;

public interface ConfigRepo extends JpaRepository<ConfigModel, String> {
    
}
