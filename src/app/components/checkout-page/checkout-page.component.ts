import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { observable, of } from 'rxjs';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { Order } from '../../models/order';
import { OutdoorsmanService } from '../../services/outdoorsman.service';
import { NumberValueAccessor } from '@angular/forms';
import { SHA256, enc } from 'crypto-js';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  fullCart: Cart["products"]
  checkoutOrder: Order = new Order()
  totalCheckOutPrice = "";
  isUserLoggedIn: Boolean = false;
  order: Order
  orderId: number
  firstName: string
  userPlaceholder: User
  cartIsEmpty: Boolean = false;
  cartCount: number;



  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,
    private outdoorsmanService: OutdoorsmanService,
    private router: Router) { }

  ngOnInit(): void {

    let userString = localStorage.getItem("user")


    let cartProducts = localStorage.getItem("cart");
    let test = JSON.parse(cartProducts)
    let partialCart = JSON.parse(cartProducts);

    if (cartProducts) {
      this.fullCart = partialCart
    }
    let sumOfProducts = 0;
    for (let i = 0; i < this.fullCart.length; i++) {
      sumOfProducts += this.fullCart[i].price;
    }
    let totalPrice = JSON.stringify(sumOfProducts);
    document.getElementById("totalPrice").innerHTML = totalPrice;
    this.totalCheckOutPrice = totalPrice;

    if (localStorage.getItem("user")) {
      this.isUserLoggedIn = true;
    }
    if (this.isUserLoggedIn) {
      this.router.navigateByUrl("/checkout");
    }
    else {
      alert("You need to log in to your account before proceeding")
      this.router.navigateByUrl("/login")
    }

  }

  onSubmit() {

    const hashedCredit = SHA256(this.checkoutOrder.creditNumber).toString(enc.Hex);

    let cart = localStorage.getItem("cart")
    let userInfo = localStorage.getItem("user")
    let userJson = JSON.parse(userInfo)
    let userOrderId = userJson.id;
    this.checkoutOrder.orderProducts = cart
    this.checkoutOrder.userId = userOrderId;
    this.checkoutOrder.totalPrice = this.totalCheckOutPrice;
    this.checkoutOrder.creditNumber = hashedCredit;
    this.checkoutOrder.cvv = "";
    this.outdoorsmanService.createNewOrder(this.checkoutOrder).subscribe(res => {
      this.order = res
      this.outdoorsmanService.order.next(this.order)
    })

    localStorage.removeItem("cart");
    this.outdoorsmanService.cartCount.next(0);
    this.router.navigateByUrl("/confirmation");
  }

}



