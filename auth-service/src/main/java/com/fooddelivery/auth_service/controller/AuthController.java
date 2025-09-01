package com.fooddelivery.auth_service.controller;


import com.fooddelivery.auth_service.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if (user.getUsername().equals("user") && user.getPassword().equals("pass")) {
            return "JWT-TOKEN-123"; // mock token
        }
        return "Invalid credentials";
    }
}
