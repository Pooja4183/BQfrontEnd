import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EditProductComponent } from "./admin/edit-product/edit-product.component";

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "edit/:productId", component: EditProductComponent },
  { path: "home", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
