import { Component, OnInit } from '@angular/core';
import { OutdoorsmanService } from '../../app/services/outdoorsman.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-item-page',
  templateUrl: './individual-item-page.component.html',
  styleUrls: ['./individual-item-page.component.css']
})
export class IndividualItemPageComponent implements OnInit {
  singleProduct: Product;
  id: number;

  constructor(private outdoorsmanService:OutdoorsmanService, private route: ActivatedRoute) { 

  }

 

  ngOnInit(): void {
this.route.params.subscribe(params => {
  this.id = +params['id'];

  this.outdoorsmanService.getSingleProduct(this.id).subscribe(res => {
    this.singleProduct = res;
  })
})}

addToCart(){

    let cart = [];
    let cartString = localStorage.getItem("cart")
    if(cartString){
        cart = JSON.parse(cartString)
    }
    cart.push(this.singleProduct);
    localStorage.setItem("cart", JSON.stringify(cart))
    cart.length
    this.outdoorsmanService.cartCount.next(cart.length);
  }

}
