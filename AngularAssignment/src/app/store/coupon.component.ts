import { Router } from '@angular/router';
import { Route } from '@angular/router';
import { DiscountRepository } from './../model/discount.repository';
import { Component } from "@angular/core";

@Component({
    templateUrl:'./coupon.component.html'
})

export class CouponComponent{
constructor(private discount :DiscountRepository, private route: Router ){}

    addDiscount(){
        this.discount.DiscountSetter(10);
        this.route.navigateByUrl('/store')
    }

    skipDiscount(){
        this.route.navigateByUrl('/store')
    }
}