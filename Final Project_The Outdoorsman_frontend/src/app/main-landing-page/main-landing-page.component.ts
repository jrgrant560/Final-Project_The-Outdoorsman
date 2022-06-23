import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { OutdoorsmanService } from '../../app/services/outdoorsman.service';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';




@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.css']
})
export class MainLandingPageComponent implements OnInit {
  productList: Product[];
  userName: User;


  constructor(private outdoorsmanService:OutdoorsmanService, private userService:UserServiceService) { 
    this.outdoorsmanService.getAllProducts().subscribe(product => (this.productList = product));
  }

  ngOnInit(): void {
  }




}
