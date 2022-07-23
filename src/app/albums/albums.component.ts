import { SplitInterpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewAlbum().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
