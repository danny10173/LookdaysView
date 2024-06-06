import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostviewComponent } from './postview/postview.component';
import { PostPreViewComponent } from './post-pre-view/post-pre-view.component';

const routes: Routes = [
  {path:'',component:PostHomeComponent},
  {path:'posthome',component:PostHomeComponent},
  {path:'postview',component:PostviewComponent},
  {path:'postpreview',component:PostPreViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
