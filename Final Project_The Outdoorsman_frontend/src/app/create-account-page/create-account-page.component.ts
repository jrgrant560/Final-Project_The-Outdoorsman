import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
// import * as crypto from 'crypto';
// const crypto = require('crypto');
import { SHA256, enc } from 'crypto-js';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {
  encryptedPass: string
  newUser: User = new User();

  constructor(private Userservice: UserServiceService) { }

  ngOnInit(): void {
   
  }

  onSubmit(){
    const hashedPass = SHA256(this.newUser.password).toString(enc.Hex);
      this.newUser.password = hashedPass;
    this.Userservice.postNewUser(this.newUser).subscribe();
    this.myForm.resetForm();
    alert("Account created, you can now log into your account!")
    
  }
  @ViewChild('myForm', {static: false}) myForm: NgForm;


}
