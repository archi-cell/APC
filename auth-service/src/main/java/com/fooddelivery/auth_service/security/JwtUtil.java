package com.fooddelivery.auth_service.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // >= 32 bytes for HS256
    private final Key key = Keys.hmacShaKeyFor("mySuperSecretKeyForJwtAuth1234567890".getBytes());

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 hr
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
