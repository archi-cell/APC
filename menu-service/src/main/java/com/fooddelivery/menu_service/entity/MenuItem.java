package com.fooddelivery.menu_service.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;

    public MenuItem() {}
    public MenuItem(String name, Double price) { this.name = name; this.price = price; }

    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
