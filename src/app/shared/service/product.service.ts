import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../model/category";
import { Product } from "../model/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url = "http://localhost:5000/api/products";

  constructor(private httpClient: HttpClient) {}

  getProductbyCategory() {
    return this.httpClient.get<{ category: Category[] }>(this.url);
  }

  getProducts() {
    return this.httpClient.get<{ product: Product[] }>(this.url);
  }

  getProductById(id) {
    return this.httpClient.get<{ product: Product }>(this.url + "/" + id);
  }

  create(product) {
    this.httpClient
      .post<{ BqPro: Product }>(this.url, product)
      .subscribe((response) => {
        console.log(response);
      });
  }

  update(product) {
    this.httpClient
      .put<{ BqPro: Product }>(this.url + "/" + product.id, product)
      .subscribe((response) => {
        console.log(response);
      });
  }

  delete(productId) {
    this.httpClient
      .delete<{ BqPro: Product }>(this.url + "/" + productId)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
