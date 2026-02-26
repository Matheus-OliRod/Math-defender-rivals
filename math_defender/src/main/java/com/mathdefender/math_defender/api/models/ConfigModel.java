package com.mathdefender.math_defender.api.models;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "config")
public class ConfigModel {
    
    @Id
    private UUID id;
    
    @OneToOne
    @MapsId
    @JoinColumn(name = "player_id", unique = true)
    private UserModel user;
    
    private int musicVolume;
    private int sfxVolume;
    private boolean hasMusic;
    private boolean hasSfx;
    private boolean hasAnimBg;

    public ConfigModel() {

    }

    // Getters

    public UserModel getUser() {
        return user;
    }

    public int getMusicVolume() {
        return musicVolume;
    }

    public int getSfxVolume() {
        return sfxVolume;
    }

    public boolean getHasMusic() {
        return hasMusic;
    }

    public boolean getHasSfx() {
        return hasSfx;
    }

    public boolean getHasAnimBg() {
        return hasAnimBg;
    }

    // Setters

    public void setUser(UserModel user) {
        this.user = user;
    }

    public void setHasAnimBg(boolean hasAnimBg) {
        this.hasAnimBg = hasAnimBg;
    }

    public void setHasMusic(boolean hasMusic) {
        this.hasMusic = hasMusic;
    }

    public void setHasSfx(boolean hasSfx) {
        this.hasSfx = hasSfx;
    }

    public void setMusicVolume(int musicVolume) {
        this.musicVolume = musicVolume;
    }

    public void setSfxVolume(int sfxVolume) {
        this.sfxVolume = sfxVolume;
    }
}
