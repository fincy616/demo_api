import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewPosts().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

   data:any=[]

  ngOnInit(): void {
  }

}
