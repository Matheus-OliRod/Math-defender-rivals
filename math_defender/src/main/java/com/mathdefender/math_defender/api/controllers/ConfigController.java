package com.mathdefender.math_defender.api.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathdefender.math_defender.api.models.ConfigModel;
import com.mathdefender.math_defender.service.ConfigService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/config")
@CrossOrigin
public class ConfigController {

    @Autowired
    private ConfigService configService;
    
    @GetMapping("/{userId}")
    public ConfigModel getConfig(@PathVariable UUID userId) {
        return configService.findConfigByUserId(userId);
    }
    
    @PutMapping("/{userId}")
    public ConfigModel updateConfig(@RequestBody ConfigModel config, @PathVariable UUID userId) {
        
        return configService.updateConfig(config, userId);
    }
    
    
}
