import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { ContentModule } from "./content/content.module";
import { HomeModule } from "./home/home.module";
import { ProductService } from "./shared/service/product.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AdminComponent } from "./admin/admin.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ContentModule,
    HomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
