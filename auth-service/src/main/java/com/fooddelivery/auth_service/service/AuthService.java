package com.fooddelivery.auth_service.service;

import com.fooddelivery.auth_service.entity.User;
import com.fooddelivery.auth_service.repository.UserRepository;
import com.fooddelivery.auth_service.security.JwtUtil;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(String username, String password) {
        if (userRepository.findByUsername(username).isPresent()) {
            return "User already exists!";
        }
        User user = new User(username, passwordEncoder.encode(password), "ROLE_USER");
        userRepository.save(user);
        return "User registered successfully!";
    }

    public String login(String username, String rawPassword) {
        return userRepository.findByUsername(username)
                .filter(u -> passwordEncoder.matches(rawPassword, u.getPassword()))
                .map(u -> jwtUtil.generateToken(u.getUsername()))
                .orElse("Invalid credentials!");
    }
}
