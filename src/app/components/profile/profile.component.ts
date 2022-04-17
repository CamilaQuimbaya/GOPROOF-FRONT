import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatarestaurantService } from 'src/app/services/datarestaurant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public dataRestaurant:DatarestaurantService, private router: Router) {

   }

  ngOnInit(): void {
  }

  guardaCodigo(){

    this.router.navigate(['/restaurants']);

    Swal.fire({
        title: 'Redime tus puntos al pagar la cuenta!',
        width: 500,
        padding: '3em',
        color: '#fff',
        background:`#ff7e7e
        no-repeat
        right`,
        backdrop: `
            rgba(49, 43, 43, 0.568)
            url(" assets/img/8.svg")
            left top
            no-repeat
            `
    })
}
}
