import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { ProductDetailComponent } from "./store/Product-Detail.Component";
import { CouponComponent } from "./store/coupon.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "coupon",
        component: CouponComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "product/:id",
        component: ProductDetailComponent,
        canActivate: [StoreFirstGuard],
      },

      {
        path: "coupon",
        component: CouponComponent,
        canActivate: [StoreFirstGuard],
      },

      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
