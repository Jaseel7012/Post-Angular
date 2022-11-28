import { Component } from '@angular/core';

@Component({
  selector: 'app-post-app-add',
  templateUrl: './post-app-add.component.html',
  styleUrls: ['./post-app-add.component.css']
})
export class PostAppAddComponent {
  userId=""
  id=""
  title=""
  body=""
  view=()=>{
    let data:any={
      "userId": this.userId,
      "id": this.id,
      "title": this.title,
      "body": this.body
    }
    console.log(data)

  }


  

}
