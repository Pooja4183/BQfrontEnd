import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/model/product";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ProductService } from "../shared/service/product.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  bqProduct: Product;
  productform: FormGroup;
  log: string;

  id = new FormControl("");
  price = new FormControl("", Validators.required);
  img1 = new FormControl("");
  img2 = new FormControl("");
  productName = new FormControl("", Validators.required);
  brand = new FormControl("", Validators.required);
  discountPrice = new FormControl("", Validators.required);
  discountLable = new FormControl("", Validators.required);
  rating = new FormControl("", Validators.required);
  sale = new FormControl("", Validators.required);

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productform = fb.group({
      id: this.id,
      price: this.price,
      img1: this.img1,
      img2: this.img2,
      productName: this.productName,
      brand: this.brand,
      discountPrice: this.discountPrice,
      discountLable: this.discountLable,
      rating: this.rating,
      sale: this.sale,
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log("On submit");
    this.productService.create(this.productform.value);
  }
}
