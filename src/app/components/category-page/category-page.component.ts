import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { OutdoorsmanService } from '../../services/outdoorsman.service';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categoryProducts: Product[];
  categoryProduct: string;
  category: Product;
  categoryTitle: string;
  
  


  constructor(private outdoorsmanService:OutdoorsmanService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryProduct = params['category'];
      this.outdoorsmanService.getAllByCategory(this.categoryProduct).subscribe(res => {
        this.categoryProducts = res;
        
      })
    })
  }

}
