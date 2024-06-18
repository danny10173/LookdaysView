import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
  providers: [DatePipe]
})
export class PostEditorComponent {
  data:any;
  private routeSub:Subscription;
  constructor(private route:ActivatedRoute,
              private dataService:DataService,
              private datepipe:DatePipe,
              private http:HttpClient){}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params)
      console.log(params['id'])
      this.dataService.getdataById(params['id']).subscribe(Response=>{
        this.data = Response;
        console.log(this.data)
      })
    });
  }
  UserPostOrEdit(){
    let body={
      "PostTitle":'abc',
      'PostTime': formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      'PostContent':'defghijklmnopqrstuvwxyz'
    };
    let url='https://localhost:7148/api/ForumPostAPI/PostByUser';
    this.http.post<any>(url,body).subscribe(res=>{
      console.log(res);
    });
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
