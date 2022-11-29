import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http:HttpClient ) { }
  fetchPost=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}