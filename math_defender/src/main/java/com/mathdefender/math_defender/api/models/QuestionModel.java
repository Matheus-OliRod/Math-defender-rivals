package com.mathdefender.math_defender.api.models;

import java.util.UUID;

// Not stored

public class QuestionModel {

    private int baseValue;
    private int defeatedAt;
    private String operation; // UNUSED
    private UUID id; // UNUSED
    private int answer;
    private int index; // UNUSED
    private float currentDifficulty;

    // GETTERS

    public String getOperation() {
        return operation;
    }

    public int getAnswer() {
        return answer;
    }

    public int getBaseValue() {
        return baseValue;
    }

    public UUID getId() {
        return id;
    }

    public int getIndex() {
        return index;
    }

    public int getDefeatedAt() {
        return defeatedAt;
    }

    public float getCurrentDifficulty() {
        return currentDifficulty;
    }

    // SETTERS

    public void setAnswer(int answer) {
        this.answer = answer;
    }

    public void setBaseValue(int baseValue) {
        this.baseValue = baseValue;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public void setDefeatedAt(int defeatedAt) {
        this.defeatedAt = defeatedAt;
    }
    
    public void setCurrentDifficulty(float currentDifficulty) {
        this.currentDifficulty = currentDifficulty;
    }
}
