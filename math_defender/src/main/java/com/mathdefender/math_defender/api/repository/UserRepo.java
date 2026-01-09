package com.mathdefender.math_defender.api.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathdefender.math_defender.api.models.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, UUID> {
    
}
