import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product'; 
import { User } from '../models/user';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OutdoorsmanService {
  public cartCount = new Subject<number>();
  public order  = new Subject<Order>();
  private token: string;


  outdoorsmanUrlProduct = "http://localhost:5000/api/product"
  outdoorsmanUrlCategory = "http://localhost:5000/api/product/category"
  outdoorsmanUrlOrder = "http://localhost:5000/api/order"
  outdoorsmanUrlOrderById = "http://localhost:5000/api/Order/user"

   
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  getAllProducts = () : Observable<any> => {
    return this.http.get<any>(this.outdoorsmanUrlProduct);
  }

  getSingleProduct(id: number) : Observable<any> {
    return this.http.get<any>(`${this.outdoorsmanUrlProduct}/${id}`);

  }

  getAllByCategory(category: string) : Observable<any> {
    return this.http.get<any>(`${this.outdoorsmanUrlCategory}/${category}`);
  }


  createNewOrder(checkOutOrder: Order) : Observable<any> {
    return this.http.post(this.outdoorsmanUrlOrder,checkOutOrder)
  }

  getOrderById(orderId: number) : Observable<any>{
    return this.http.get<any>(`${this.outdoorsmanUrlOrder}/${orderId}`);
  }


  getAllOrdersById(id: number) : Observable<any> {
    return this.http.get<any>(`${this.outdoorsmanUrlOrderById}/${id}`,{headers: {'Authorization': 'Bearer '+this.token}});
   
  }
}
