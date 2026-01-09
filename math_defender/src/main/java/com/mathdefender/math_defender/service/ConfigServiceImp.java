package com.mathdefender.math_defender.service;

import org.springframework.stereotype.Service;

import com.mathdefender.math_defender.api.models.ConfigModel;

@Service
public class ConfigServiceImp implements ConfigService {

    @Override
    public ConfigModel saveConfig(ConfigModel config) {
        throw new UnsupportedOperationException("Unimplemented method 'saveConfig'");
    }

    @Override
    public ConfigModel getConfigModel() {
        throw new UnsupportedOperationException("Unimplemented method 'getConfigModel'");
    }
    
}
