import { Component, OnInit } from '@angular/core';
import { DatarestaurantService } from 'src/app/services/datarestaurant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public dataRestaurant:DatarestaurantService ) { 

   }

  ngOnInit(): void {
  }

}
