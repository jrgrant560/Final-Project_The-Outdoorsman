import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OutdoorsmanService } from '../services/outdoorsman.service';
import { UserServiceService } from '../services/user-service.service';
import { Product } from '../models/product';
import * as moment from 'moment';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
isUserLoggedIn: Boolean = false;
allUserOrders: Order[];
userID: number;
orders: Order
currentUser: User;
products: Product[];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService, private outdoorsmanService: OutdoorsmanService) {    
  }
  ngOnInit(): void {

    if(localStorage.getItem("user")){
      this.isUserLoggedIn = true;
    }
    // if(!this.isUserLoggedIn){
    //   alert("You need to log in to your account before proceeding")
    //   this.router.navigateByUrl("/login")
    // }

   this.currentUser = JSON.parse(localStorage.getItem("user"))
     this.outdoorsmanService.getAllOrdersById(this.currentUser.id).subscribe(orders => {this.allUserOrders=orders
     })
    }

    deleteAccount(){
      if(confirm("Are you sure you want to delete your account?")){
      this.userService.deleteUser(this.currentUser.id, ).subscribe();
      this.userService.user.next(null);
      this.router.navigateByUrl("/home") }
    }

    public parseProducts(strProducts: string)
    {
      return JSON.parse(strProducts);
    }

    public formatDateTime(strDateTime: string)
    {
      return moment(strDateTime).format('MM/DD/YYYY HH:mm')
    }

  }     
