package com.mathdefender.math_defender.service;

import java.util.UUID;

import com.mathdefender.math_defender.api.models.ConfigModel;

public interface ConfigService {
    
    public ConfigModel findConfigByUserId(UUID userId);
    public ConfigModel updateConfig(ConfigModel config, UUID id);
}
