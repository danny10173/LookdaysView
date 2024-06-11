import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:'<div [innerHTML]="templateHTML"><div>'
})
export class AppComponent {
  title = 'LookdaysView';

}
