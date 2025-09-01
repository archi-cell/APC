package com.fooddelivery.menu_service.repository;

import com.fooddelivery.menu_service.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {}
