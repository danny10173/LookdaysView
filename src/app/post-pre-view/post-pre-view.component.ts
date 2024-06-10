import { Component } from '@angular/core';

@Component({
  selector: 'app-post-pre-view',
  templateUrl: './post-pre-view.component.html',
  styleUrls: ['./post-pre-view.component.css'],
  template:'<div [innerHTML]="templateHTML"><div>'
})
export class PostPreViewComponent {

}
