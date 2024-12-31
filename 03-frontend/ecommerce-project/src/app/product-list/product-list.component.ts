import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  public currentCategoryId: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  
  }

  public listProducts() {

    // Check if the supplied ID paramter is available. Available = true, Unavailable = false
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      // extract the "id" parameter as a number
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // use a default value
      this.currentCategoryId = 1;
    }

    // Make the query for product(s) using the Product Service
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )

  }
}