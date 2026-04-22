package com.mathdefender.math_defender.service;

import java.util.List;
import java.util.UUID;

import com.mathdefender.math_defender.api.models.QuestionModel;
import com.mathdefender.math_defender.api.models.UserModel;

public interface QuestionService {
    
    public UserModel setScore(UUID id, List<QuestionModel> question);
}
