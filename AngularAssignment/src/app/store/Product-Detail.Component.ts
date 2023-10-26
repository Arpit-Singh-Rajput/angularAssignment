import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

// ...
@Component({
    templateUrl:'./Product-Detail.Component.html'
})
export class ProductDetailComponent implements OnInit {
    product: Product | undefined;

  constructor(
    private repository: ProductRepository,
    private route: ActivatedRoute
  ) {}
pagetitle:string = 'productId'

  ngOnInit() {
        this.load()
    
}
load(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
     this.product = this.repository.getProduct(id);
    }


}