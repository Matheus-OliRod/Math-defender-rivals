package com.mathdefender.math_defender.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.api.repository.UserRepo;

public class UserServiceImp implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserModel saveUser(UserModel user) {
        return userRepo.save(user);
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }
    
}
