package com.mathdefender.math_defender.api.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathdefender.math_defender.api.models.QuestionModel;
import com.mathdefender.math_defender.api.models.UserModel;
import com.mathdefender.math_defender.service.QuestionService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping("validateScore/{id}")
    public UserModel validateScore(@RequestBody List<QuestionModel> questions, @PathVariable UUID id) {
        
        return questionService.setScore(id, questions);
    }
    
    
}
