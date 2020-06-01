import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../shared/service/product.service";
import { Product } from "./../../shared/model/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  title = "Available Products";

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (pooja) => {
        this.products = pooja.product;
      },
      (err) => console.log(err)
    );
  }
}
