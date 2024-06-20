import { CurrentUserDTO } from './../../type/index';
import { DataService } from './../data.service';
import { AuthUserService } from './../service/auth-user.service';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private AuthUserService:AuthUserService,
              private DataService:DataService,
              private route:ActivatedRoute
              ){}
  loginBtn = 'Log-in';
  user:any;
  private routeSub:Subscription;

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
  Keyword:string
  search():void{
    this.DataService.searchByKeywords(this.Keyword).subscribe(Response=>{
      this.user = Response;
      console.log(this.user);
    })
  }

}
