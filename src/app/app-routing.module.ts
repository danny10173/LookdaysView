import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostviewComponent } from './postview/postview.component';
import { PostPreViewComponent } from './post-pre-view/post-pre-view.component';
import { PostEditorComponent } from './post-editor/post-editor.component';

const routes: Routes = [
  {path:'',component:PostHomeComponent},
  {path:'posthome',component:PostHomeComponent},
  {path:'postview',component:PostviewComponent},
  {path:'postpreview',component:PostPreViewComponent},
  {path:'postedit',component:PostEditorComponent},
  {path:'postview/:id',component:PostviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
