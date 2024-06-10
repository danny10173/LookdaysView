import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './../data.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent {
  data:any;
  private routeSub:Subscription;
  constructor(private route:ActivatedRoute,private dataService:DataService){}
  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params)
      console.log(params['id'])
      this.dataService.getdataById(params['id']).subscribe(Response=>{
        this.data = Response;
        console.log(this.data);
      })
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
