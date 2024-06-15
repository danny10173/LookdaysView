import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService implements OnDestroy {

  constructor() { }

  checklogin(){
    return !!localStorage.getItem('token');
  }

  ngOnDestroy(): void {
    localStorage.removeItem('token');
  }
}
