import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../shared/model/category";
import { Product } from "../shared/model/product";

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
}
