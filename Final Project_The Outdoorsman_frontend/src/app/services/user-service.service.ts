import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product'; 
import { User } from '../models/user';
import { Order } from '../models/order';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})

 export class UserServiceService {
  token: string;
  public user = new Subject<User | null>();
  outdoorsmanUrlUser = "http://localhost:5000/api/user";
  outdoorsmanUrlLogin = "http://localhost:5000/api/login";
  outdoorsmanUrlOrders = "http://localhost:5000/api/orders";

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }

  getAllUsers = () : Observable<any> => {
    return this.http.get<any>(this.outdoorsmanUrlUser);
  }
  getUserById(id: number) : Observable<any> {
    return this.http.get<any>(`${this.outdoorsmanUrlUser}/${id}`);
  }
  postNewUser = (newUser: User) => {
    return this.http.post(this.outdoorsmanUrlUser, newUser)
  }
  postLoginUser(loginUser: User) : Observable<any> {
    return this.http.post<any>(this.outdoorsmanUrlLogin, loginUser)
  }

  deleteUser(id: number) : Observable<any> {
    return this.http.delete(`${this.outdoorsmanUrlUser}/${id}`,{headers: {'Authorization': 'Bearer '+this.token}}
    )}

 getAllOrdersByUserId(id: number) : Observable<any> {
    return this.http.get<any>(`${this.outdoorsmanUrlOrders}/${id}`);
  }

}