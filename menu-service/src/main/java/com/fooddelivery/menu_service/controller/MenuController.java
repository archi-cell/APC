package com.fooddelivery.menu_service.controller;

import com.fooddelivery.menu_service.entity.MenuItem;
import com.fooddelivery.menu_service.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private MenuItemRepository menuItemRepository;

    // Get all menu items
    @GetMapping
    public List<MenuItem> getMenu() {
        return menuItemRepository.findAll();
    }

    // Add new menu item
    @PostMapping
    public MenuItem addMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }
}
