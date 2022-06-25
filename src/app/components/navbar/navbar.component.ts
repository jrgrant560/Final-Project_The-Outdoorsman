import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { OutdoorsmanService } from '../../services/outdoorsman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
productList: Product[];
productCategory: Product;
public isUserLoggedIn: boolean = false;
public user: User;
public cartCount: number
name = 'Angular';

  constructor(private outdoorsmanService:OutdoorsmanService,private userService: UserServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  
    let cart = [];
    let cartString = localStorage.getItem("cart")
    if(cartString){
        cart = JSON.parse(cartString)
    }
    this.cartCount = cart.length;


   let userInfo = localStorage.getItem("user")
   this.user = JSON.parse(userInfo);
   this.userService.user.subscribe(user => {
     this.user = user;
     if (this.user) {
      this.isUserLoggedIn = true;
     }
      else{
        this.isUserLoggedIn = false;
      }
    });
    this.outdoorsmanService.cartCount.subscribe(cartCount => {
      this.cartCount = cartCount;
     });
  }
  logOut(){
     localStorage.removeItem("user");
     localStorage.removeItem("token");
     this.userService.user.next(null);
     this.router.navigateByUrl("/home");
      }

}
