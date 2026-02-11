package com.mathdefender.math_defender.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathdefender.math_defender.api.models.ConfigModel;
import com.mathdefender.math_defender.api.repository.ConfigRepo;
import com.mathdefender.math_defender.api.repository.UserRepo;

@Service
public class ConfigServiceImp implements ConfigService {

    @Autowired
    private ConfigRepo configRepo;

    @Autowired
    private UserRepo userRepo;

    public ConfigServiceImp(ConfigRepo configRepo) {
        this.configRepo = configRepo;
    }

    @Override
    public ConfigModel findConfigByUserId(UUID userId) {
        return configRepo.findByUserId(userId).orElseThrow(() -> new RuntimeException("User id not found. (Config find by id)"));
    }

    @Override
    public ConfigModel updateConfig(ConfigModel newConfig, UUID userId) {

        ConfigModel config = findConfigByUserId(userId);

        config.setMusicVolume(newConfig.getMusicVolume());
        config.setSfxVolume(newConfig.getSfxVolume());
        config.setHasMusic(newConfig.getHasMusic());
        config.setHasSfx(newConfig.getHasSfx());
        config.setHasAnimBg(newConfig.getHasAnimBg());

        return configRepo.save(config);
    }
    
}
