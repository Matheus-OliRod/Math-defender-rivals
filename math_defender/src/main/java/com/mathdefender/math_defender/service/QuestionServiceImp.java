package com.mathdefender.math_defender.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathdefender.math_defender.api.models.QuestionModel;
import com.mathdefender.math_defender.api.models.UserModel;

@Service
public class QuestionServiceImp implements QuestionService {
    @Autowired
    UserService userService;

    @Override
    public UserModel setScore(UUID id, List<QuestionModel> questions) {

        UserModel player = userService.getUserById(id);

        float score = 0;
        int lastQuestionTime = 0; // Time from the last question answered.
        float lastDifficulty = 0;

        // Processing questions

        for(QuestionModel question : questions) {

            System.out.println("Question Info:" +
            "\nscore: " + question.getBaseValue() +
            "\ndifficulty: " + question.getCurrentDifficulty() +
            "\ntime: " + question.getDefeatedAt());

            score += question.getCurrentDifficulty() * question.getBaseValue() * (question.getDefeatedAt() - lastQuestionTime);
            lastDifficulty = question.getCurrentDifficulty();
            lastQuestionTime = question.getDefeatedAt();
        }

        // Deciding fate

        System.out.println("Final Score: " + score);

        if(player.getBestScore() < score) {
            player.setBestScore((int) score);
            player.setprevDifficulty((lastDifficulty > 0) ? lastDifficulty - 2 : 0);
            return userService.updateUser(player, player.getId());
        }

        return player;
    }
    
}
