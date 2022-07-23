import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping-app',
  templateUrl: './shopping-app.component.html',
  styleUrls: ['./shopping-app.component.css']
})
export class ShoppingAppComponent implements OnInit {

  constructor(private api:ApiService) {

    api.viewProducts().subscribe(
      (response)=>{
        this.data=response
      }
    )

    
   }

  data:any=[]

  ngOnInit(): void {
  }

}
