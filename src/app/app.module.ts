import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAppAddComponent } from './post-app-add/post-app-add.component';
import { PostViewComponent } from './post-view/post-view.component';
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
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
