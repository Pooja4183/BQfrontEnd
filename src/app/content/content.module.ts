import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductComponent, ProductListComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductComponent, ProductListComponent, SidebarComponent],
})
export class ContentModule {}
