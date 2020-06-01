import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Banner } from "./Banner";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  banners: Banner[];
  currentSlide: number;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("assets/banner.json").subscribe((policy: Banner[]) => {
      console.log(policy);
      this.banners = policy;
    });
    this.currentSlide = 1;
  }

  goPrev() {
    if (this.currentSlide != 1) {
      --this.currentSlide;
    }
  }

  goNext() {
    console.log("Next" + this.currentSlide);
    if (this.currentSlide != 3) {
      this.currentSlide++;
    }
  }
}
