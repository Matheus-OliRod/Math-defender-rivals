package com.mathdefender.math_defender.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.api.repository.UserRepo;

@Service
public class UserServiceImp implements UserService {

    
    private UserRepo userRepo;

    public UserServiceImp(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserModel saveUser(UserModel user) {
        return userRepo.save(user);
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserModel updateUserModel(UserModel updatedUser, UUID id) {
        UserModel user = userRepo.findById(id).
                            orElseThrow(() -> new RuntimeException("User not found"));
        
        user.setBestScore(updatedUser.getBestScore());
        user.setLastScore(updatedUser.getLastScore());
        user.setName(updatedUser.getName());
        user.setRivalName(updatedUser.getRivalName());

        return userRepo.save(user); 
    }
    
}
