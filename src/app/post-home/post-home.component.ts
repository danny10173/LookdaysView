import { DataService } from './../data.service';
import { Component, OnInit, ViewChild,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  data:any;

  constructor(private dataService:DataService,private router: Router){}

  ngOnInit(): void {
    this.dataService.getdata().subscribe(Response=>{
      this.data = Response;
      console.log(this.data);
    })
  }
  @ViewChild('container',{read:ViewContainerRef}) container!:ViewContainerRef;


}
