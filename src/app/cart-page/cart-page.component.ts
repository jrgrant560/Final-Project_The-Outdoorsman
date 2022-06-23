import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart';
import { OutdoorsmanService } from '../services/outdoorsman.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  fullCart: Cart["products"] = [];
  public isUserLoggedIn: boolean = false; 
  public isCartEmpty: boolean = false;
  constructor(private outdoorsmanService: OutdoorsmanService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let cartProducts = localStorage.getItem("cart");
    let partialCart = JSON.parse(cartProducts);
    if(localStorage.getItem("user")){
      this.isUserLoggedIn = true;
    }

    if(cartProducts){
      this.fullCart = partialCart
    }
    
    let sumOfProducts = 0;
    for(let i=0; i < this.fullCart.length; i++){
      sumOfProducts += this.fullCart[i].price;  
    }

    if(sumOfProducts > 0){
      this.isCartEmpty = true;
    }
  }

  loginCheck(){
  
    if(this.isUserLoggedIn && this.isCartEmpty == true){
      this.router.navigateByUrl("/checkout");
    }
    else if(this.isUserLoggedIn == false){
      alert("You need to log in to your account before proceeding")
      this.router.navigateByUrl("/login")
    }
    else if(this.isCartEmpty == false){
      alert("Your shopping cart is empty, add items to your cart in order to checkout")
    }
    
  }
  removeItem(id: number){
    let cartCount =  this.fullCart;
    for(let i=0; i < this.fullCart.length; i++){
      if(this.fullCart[i].id == id){
        let cartPosition = i;
        cartCount.splice(cartPosition, 1);
        localStorage.setItem('cart',JSON.stringify(cartCount));
        cartCount.length
        this.outdoorsmanService.cartCount.next(cartCount.length);
      }
      if(cartCount.length == 0){
        localStorage.removeItem("cart");

      }

    }
    window.location.reload();
  }
}
