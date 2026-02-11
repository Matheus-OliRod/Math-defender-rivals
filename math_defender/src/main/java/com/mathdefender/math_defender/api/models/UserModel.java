package com.mathdefender.math_defender.api.models;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "players")
public class UserModel {

    @Id
    @GeneratedValue
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private String email;
    private String name;
    private String rivalName;
    private int bestScore;
    private int lastScore;
    private boolean status;
    private String role;
    private float prevDifficulty;

    public UserModel() {

    }

    // Getters

    public UUID getId() {
        return id;
    }

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
    
    public float getPrevDifficulty() {
    	return prevDifficulty;
    }

    // Setters

    public void setId(UUID id) {
        this.id = id;
    }

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

    public void setprevDifficulty(float prevDifficulty) {
        this.prevDifficulty = prevDifficulty;
    }
}
