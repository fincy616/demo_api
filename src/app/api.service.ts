import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewProducts=()=>{
    return this.http.get("https://fakestoreapi.com/products")
  }

  viewTodo=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

  viewAlbum=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
  viewLIveNews=()=>{
    return this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-23&sortBy=publishedAt&apiKey=867d435c96724b1181aa9b647eb70461")
  }
  viewPosts=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  viewPhotos=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
  viewUser=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}

