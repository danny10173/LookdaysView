import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private http:HttpClient){}
  path:'posthome';
  login(){
    let body = {
      "email": "test123@test.com",
      "username": "test123",
      "password": "test"
    };

    let url = "https://localhost:7148/api/LoginJWT/Log-in";

    this.http.post<any>(url,body).subscribe(res=>{
      console.log(res);
    });
  }

}
