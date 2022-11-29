import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAppAddComponent } from './post-app-add/post-app-add.component';
import { PostViewComponent } from './post-view/post-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'
const myroute:any=[
  {
    path:'',
    'component':PostAppAddComponent
  },
  {
    path:'view',
    'component':PostViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostAppAddComponent,
    PostViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
