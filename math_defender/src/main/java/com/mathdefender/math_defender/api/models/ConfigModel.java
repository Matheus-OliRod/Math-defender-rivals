package com.mathdefender.math_defender.api.models;

import jakarta.persistence.Id;

public class ConfigModel {
    
    @Id
    private String email;
    private int musicVolume;
    private int sfxVolume;
    private boolean hasMusic;
    private boolean hasSfx;
    private boolean hasAnimBg;

    public ConfigModel() {

    }

    // Getters

    public String getEmail() {
        return email;
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

    public void setEmail(String email) {
        this.email = email;
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
