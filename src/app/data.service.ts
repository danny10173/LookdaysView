import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getdata():Observable<any>{
    return this.http.get('https://localhost:7148/api/forumpost')
  }
  getdataById(id){
    return this.http.get('https://localhost:7148/api/ForumPost/{id}?postid='+id)
  }
  getCurrentUser(){
    return this.http.get('https://localhost:7148/api/LoginJWT/get-current-user')
  }
  searchByKeywords(kw){
    return this.http.get('https://localhost:7148/api/ForumPostAPI/SearchByKeywords?keywords='+kw)
  }
}
