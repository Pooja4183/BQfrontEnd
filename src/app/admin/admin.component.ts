import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/model/product";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  bqProduct: Product;
  productform: FormGroup;

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

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
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
    // this.httpClient.get<{movies: Movie[]}>("http://localhost:5000/api/movies")
    // .subscribe((movieData)=>{
    // this.movies = movieData.movies;
    console.log("On submit");
    this.httpClient
      .post<{ BqPro: Product }>(
        "http://localhost:5000/api/products",
        this.productform.value
      )
      .subscribe((productfor) => {
        console.log(productfor);
      });
  }
}
