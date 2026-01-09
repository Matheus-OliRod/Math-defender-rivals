package com.mathdefender.math_defender.service;

import com.mathdefender.math_defender.api.models.ConfigModel;

public interface ConfigService {
    
    public ConfigModel saveConfig(ConfigModel config);
    public ConfigModel getConfigModel();
}
