package com.mathdefender.math_defender.service;

import java.util.List;
import java.util.UUID;

import com.mathdefender.math_defender.api.models.UserModel;

public interface UserService {

    public UserModel saveUser(UserModel user);
    public List<UserModel> getAllUsers();
    public UserModel updateUserModel(UserModel user, UUID id);
} 

    
    

