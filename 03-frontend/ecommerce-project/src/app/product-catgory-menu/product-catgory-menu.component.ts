import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../common/product-category';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-catgory-menu',
  templateUrl: './product-catgory-menu.component.html',
  styleUrls: ['./product-catgory-menu.component.css']
})
export class ProductCatgoryMenuComponent implements OnInit {

  public productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  public listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    )
  }

}