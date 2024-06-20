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
import { AuthInterceptor } from './auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

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
    MdbFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    EditorModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
