import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/model/product";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../../shared/service/product.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productservice: ProductService
  ) {
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

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const fetchedId = +this.route.snapshot.paramMap.get("productId");
    this.id.setValue(fetchedId);
    this.productservice.getProductById(fetchedId).subscribe(
      (data) => {
        console.log(data.product);
        this.bqProduct = data.product;
        console.log(this.bqProduct);
        this.price.setValue(this.bqProduct.price);
        this.img1.setValue(this.bqProduct.img1);
        this.id.setValue(this.bqProduct.id);
        this.img2.setValue(this.bqProduct.img2);
        this.productName.setValue(this.bqProduct.productName);
        this.brand.setValue(this.bqProduct.brand);
        this.discountLable.setValue(this.bqProduct.discountLable);
        this.discountPrice.setValue(this.bqProduct.discountPrice);
        this.rating.setValue(this.bqProduct.rating);
        this.sale.setValue(this.bqProduct.sale);
      },
      (err) => console.log(err)
    );
  }
  onSubmit() {
    this.productservice.update(this.productform.value);
  }
}
