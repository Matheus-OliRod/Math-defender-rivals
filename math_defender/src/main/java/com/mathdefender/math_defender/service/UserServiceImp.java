package com.mathdefender.math_defender.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.mathdefender.math_defender.api.models.ConfigModel;
import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.api.repository.ConfigRepo;
import com.mathdefender.math_defender.api.repository.UserRepo;

@Service
public class UserServiceImp implements UserService {

    private final UserRepo userRepo;
    private final ConfigRepo configRepo;

    public UserServiceImp(UserRepo userRepo, ConfigRepo configRepo) {
        this.userRepo = userRepo;
        this.configRepo = configRepo;
    }

    @Override
    public UserModel saveUser(UserModel user) {

        // Verifying if user already exists
        UserModel existing = userRepo.findByEmail(user.getEmail()).orElse(null);

        if(existing != null) throw new RuntimeException("User already exists");

        if(user.getId() == null) {
            user.setId(UUID.randomUUID());
        }

        UserModel savedUser = userRepo.save(user);
        ConfigModel config = new ConfigModel();

        config.setUser(savedUser);

        // Setting default values
        config.setHasAnimBg(true);
        config.setHasMusic(true);
        config.setHasSfx(true);
        config.setMusicVolume(50);
        config.setSfxVolume(50);

        configRepo.save(config);
        
        return savedUser;
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserModel updateUser(UserModel updatedUser, UUID id) {
        UserModel user = userRepo.findById(id).
                            orElseThrow(() -> new RuntimeException("User not found"));
        
        user.setBestScore(updatedUser.getBestScore());
        user.setLastScore(updatedUser.getLastScore());
        user.setName(updatedUser.getName());
        user.setRivalEmail(updatedUser.getRivalEmail());

        return userRepo.save(user); 
    }

    @Override
    public UserModel getUserByEmail(String email) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found (Find by Email)"));

        return user;
    }

    @Override
    public UserModel getUserById(UUID id) {
        UserModel user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found (Find by ID)"));

        return user;
    }
    
}
