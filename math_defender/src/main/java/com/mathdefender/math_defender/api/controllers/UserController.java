package com.mathdefender.math_defender.api.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@RequestMapping("/players") // Players == Users. Named users for they might have different roles (dev, admin or just player)
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public UserModel saveUser(@RequestBody UserModel user) {
        return userService.saveUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/getUserByEmail/{email}")
    public UserModel getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PutMapping("updateUser/{id}")
    public UserModel updatUserModel(@PathVariable UUID id, @RequestBody UserModel user) {
        return userService.updateUser(user, id);
    }
    
    
}
