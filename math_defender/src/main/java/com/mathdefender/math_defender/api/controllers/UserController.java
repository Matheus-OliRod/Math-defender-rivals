package com.mathdefender.math_defender.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/players") // Players == Users. Named users for they might have different roles (dev, admin or just player)
@CrossOrigin
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
    
    
    
}
