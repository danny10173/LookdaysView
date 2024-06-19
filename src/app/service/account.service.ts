import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  onLogin(obj:any):Observable<any>{

    let url = "https://localhost:7148/api/LoginJWT/Log-in";

    return this.http.post(url,obj);


  }

  LoginWithHash(obj:any):Observable<any>{
    let url = "https://localhost:7148/api/LoginJWT/Log-in-hash";

    return this.http.post(url,obj)
  }
}
