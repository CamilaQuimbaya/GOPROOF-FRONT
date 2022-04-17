import { Component, Input, OnInit } from '@angular/core';
import { DatarestaurantService } from 'src/app/services/datarestaurant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() title:any;

  constructor( public dataRestaurant:DatarestaurantService) { }

  ngOnInit(): void {
  }

  contruction(){
    Swal.fire({
      title: 'En construcción!',
      text: 'Esta sección está en mantenimiento',
      imageUrl: '../../../assets/img/4.svg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
}
