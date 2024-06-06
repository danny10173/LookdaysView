import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  data:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getdata().subscribe(Response=>{
      this.data = Response;
      console.log(this.data);
    })

  }

}
