package dev.ecommerceapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="product_category")
@Data
public class ProductCategory {
    private Long id;
    private String categoryName;
}