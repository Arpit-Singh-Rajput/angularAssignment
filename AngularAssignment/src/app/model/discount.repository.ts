import { Injectable } from "@angular/core";

@Injectable()

export class DiscountRepository{
    private discountpercent : number = 0

    DiscountSetter(discountpercent : number){
        this.discountpercent = discountpercent
    }

    DiscountGetter(){
        return this.discountpercent
    }
}
