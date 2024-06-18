import { Data, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { AuthUserService } from '../service/auth-user.service';
import { DataService } from './../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private AuthUserService:AuthUserService,
              private accService:AccountService,
              private DataService:DataService){}

  loginObj = {
    "email": "test123@test.com",
    "username": "test123",
    "password": "test"
  };

  onLogin(){
    this.accService.onLogin(this.loginObj).subscribe((res:any)=>{
      console.log('res',res)
      localStorage.setItem('token',res.token)
    })
  }
  user:any;

  checkUser(): void {
    if(this.AuthUserService.checklogin()!=null){
      this.DataService.getCurrentUser().subscribe(Response=>{
          this.user = Response;
          console.log(this.user);
      })
    }
    else{
      console.log('token not found');
    }
  }

}
