import { Injectable } from "@angular/core";

@Injectable()

export class DiscountRepository{
    private discountNumber : number = 0

    DiscountSetter(discountNumber : number){
        this.discountNumber = discountNumber
    }

    DiscountGetter(){
        return this.discountNumber
    }
}
