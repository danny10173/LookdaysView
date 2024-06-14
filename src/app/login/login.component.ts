import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accService:AccountService, private route:Router){}

  loginObj = {
    "email": "test123@test.com",
    "username": "test123",
    "password": "test"
  };

  onLogin(){
    debugger

    this.accService.onLogin(this.loginObj).subscribe((res:any)=>{
      console.log('res',res)
      localStorage.setItem('token',res.token)
    })
  }

}
