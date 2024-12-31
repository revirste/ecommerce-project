import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/Product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  public getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products)
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}