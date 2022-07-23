import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-livenews',
  templateUrl: './livenews.component.html',
  styleUrls: ['./livenews.component.css']
})
export class LivenewsComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewLIveNews().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  data:any=[]

  ngOnInit(): void {
  }

}
