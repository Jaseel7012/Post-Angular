import { Component } from '@angular/core';
import { PostApiService } from '../post-api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
  constructor(private api:PostApiService){
    api.fetchPost().subscribe(
      (response)=>{
        this.data=response

      }
    )
  }

  data:any=[]

}
