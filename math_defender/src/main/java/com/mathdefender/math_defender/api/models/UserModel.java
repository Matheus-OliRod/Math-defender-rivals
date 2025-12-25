package com.mathdefender.math_defender.api.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserModel {

    @Id
    private String email;
    private String name;
    private String rivalName;
    private int bestScore;
    private int lastScore;
    private boolean status;
    private String role;

    public UserModel() {

    }

    // Getters

    public int getBestScore() {
        return bestScore;
    }

    public String getEmail() {
        return email;
    }

    public int getLastScore() {
        return lastScore;
    }

    public String getName() {
        return name;
    }

    public String getRivalName() {
        return rivalName;
    }

    public String getRole() {
        return role;
    }

    public boolean getStatus() {
        return status;
    }

    // Setters

    public void setBestScore(int bestScore) {
        this.bestScore = bestScore;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLastScore(int lastScore) {
        this.lastScore = lastScore;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRivalName(String rivalName) {
        this.rivalName = rivalName;
    }
    
    public void setRole(String role) {
        this.role = role;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
