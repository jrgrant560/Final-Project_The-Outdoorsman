import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OutdoorsmanService } from '../services/outdoorsman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { Product } from '../models/product';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
order: Order;
confirmation: User;
orderConfirmation: Order;
orderString: string="";
products: Product[];

  constructor(private outdoorsmanService: OutdoorsmanService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.outdoorsmanService.order.subscribe(orderInc =>{
      this.order = orderInc

    })
    const jokeEl = document.getElementById('joke')
    generateJoke();
    async function generateJoke () {
      const config = {
              headers: {
                  Accept: 'application/json'
          },
      }
  
      const res= await fetch('https://icanhazdadjoke.com', config)
  
      const data = await res.json()
  
      jokeEl.innerHTML = "&quot" + data.joke + "&quot"
  }
    
  };

  public parseProducts(strProducts: string)
    {
      return JSON.parse(strProducts);
    }

}
