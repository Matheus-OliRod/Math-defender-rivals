package com.mathdefender.math_defender.api.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mathdefender.math_defender.api.models.ConfigModel;

public interface ConfigRepo extends JpaRepository<ConfigModel, UUID> {
    Optional<ConfigModel> findByUserId(UUID userId);
}
