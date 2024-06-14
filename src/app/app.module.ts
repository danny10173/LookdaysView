import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostPreViewComponent } from './post-pre-view/post-pre-view.component';
import { HeaderComponent } from './header/header.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostviewComponent } from './postview/postview.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PostHomeComponent,
    PostPreViewComponent,
    HeaderComponent,
    FooterComponent,
    PostviewComponent,
    PostEditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    HttpClientModule,
    CommonModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
