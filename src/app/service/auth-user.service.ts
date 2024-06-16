import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService implements OnDestroy {

  constructor(private HttpClient:HttpClient) { }

  checklogin(){
    return !!localStorage.getItem('token');
  }

  ngOnDestroy(): void {
    localStorage.removeItem('token');
  }
}
