import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { NgForm } from '@angular/forms';
import { SHA256, enc } from 'crypto-js';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})





@Injectable({
  providedIn: 'root'
})

export class LoginPageComponent implements OnInit {
  loginUser: User = new User();
  token: string = "";
  user: User;
  error: string;
  data: any; 
 


  constructor(private router: Router, private http: HttpClient, private Userservice: UserServiceService) { }
 
  ngOnInit(): void {
    
  }

  onSubmit() {
    const hashedPass = SHA256(this.loginUser.password).toString(enc.Hex);
    this.loginUser.password = hashedPass;
   this.Userservice.postLoginUser(this.loginUser).subscribe(
     res => {
       
       localStorage.setItem("token", res.token)
       localStorage.setItem("user", JSON.stringify(res.user))
       this.Userservice.user.next(res.user);
    
      this.router.navigateByUrl("/home");
    },
     error => this.error = "Unable to login with email and password");

  }
  }
  


