import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Map, tileLayer, circle, marker } from 'leaflet'
import { Restaurant } from 'src/app/models/restaurant';
import { DatarestaurantService } from 'src/app/services/datarestaurant.service';

//service
import { RestaurantService } from 'src/app/services/restaurant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, AfterViewInit {
  //variable conectada a formulario reactivo
  listres:Restaurant[] =[];
  restaurantForm: FormGroup;
  restaurantesdb: Restaurant[] = [];

  constructor(private fb: FormBuilder, private restaurantservice: RestaurantService, private dataRestaurant:DatarestaurantService, private router:Router) { 
    this.restaurantForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      menu: ['', Validators.required],
      categoria: ['', Validators.required],
      numero: ['', Validators.required],
      ciudad: ['', Validators.required],
      parqueadero: ['', Validators.required],
      horario: ['', Validators.required],
      longitud: ['', Validators.required],
      latitud: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getForm();
  }
  idData(rest:any){
    this.router.navigate(['/profile']);
    this.dataRestaurant.nombre = rest.nombre
    this.dataRestaurant.descripcion = rest.descripcion
    this.dataRestaurant.menu = rest.menu
    this.dataRestaurant.categoria = rest.categoria
    this.dataRestaurant.numero = rest.numero
    this.dataRestaurant.ciudad = rest.ciudad
    this.dataRestaurant.parqueadero = rest.parqueadero
    this.dataRestaurant.horario = rest.horario
    this.dataRestaurant.longitud = rest.longitud
    this.dataRestaurant.latitud = rest.latitud


    console.log(rest.nombre)
  }
  getForm(){
    this.restaurantservice.getRestaurant().subscribe(data =>{
      console.log(data);
      this.listres = data;
    }, error =>{
      console.log(error);
    })
  }
  postForm() {
    const data_restaurant: Restaurant = {
      nombre: this.restaurantForm.get('nombre')?.value,
      descripcion: this.restaurantForm.get('descripcion')?.value,
      menu: this.restaurantForm.get('menu')?.value,
      categoria: this.restaurantForm.get('categoria')?.value,
      numero: this.restaurantForm.get('numero')?.value,
      ciudad: this.restaurantForm.get('ciudad')?.value, 
      parqueadero: this.restaurantForm.get('parqueadero')?.value,
      horario: this.restaurantForm.get('horario')?.value,
      longitud: this.restaurantForm.get('longitud')?.value,
      latitud: this.restaurantForm.get('latitud')?.value,
    }
    console.log(data_restaurant)
    this.restaurantservice.postProduct(data_restaurant).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Dato actualizado',
        text: 'El producto se cambio correctamente'
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Algo esta pasando',
        text: 'Comuniquese con el administrador'
      })
      console.log(error)
    })

  }
  ngAfterViewInit(): void {
    //mapa
    //map initialization
    var mapa = new Map('map').fitWorld();
    //map used from openstreetmap
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);
    //poner card en mapa
    const card1 = document.getElementById("card1");
    const p = document.createElement("p");
    p.textContent = "Esta tarjeta funciona bien";
    card1?.appendChild(p);
    
    //Current location
    mapa.locate({ setView: true, maxZoom: 25, watch: true });
    //use the Cárdenas obtained, in case of obtaining them
    function onLocationFound(e: any) {
      var radius = e.accuracy;
      console.log(e.latlng)
      marker(e.latlng).addTo(mapa)
        .bindPopup('<h6>You are here<h6>').openPopup();
      circle(e.latlng, radius).addTo(mapa);
    }/*  */
    //ask permission to current location

    mapa.on('locationfound', onLocationFound);

    //location permission denied
    function onLocationError(e: any) {
      alert(e.message);
    }
    //location permission denied
    mapa.on('locationerror', onLocationError);
    //finall mapa

    //marker restaurants
    this.restaurantservice.getRestaurant().subscribe(data => {
    console.log(data);
    const card1 = document.getElementById("card1");
    const p = document.createElement("p");
    p.textContent = "Esta tarjeta funciona bien";
    card1?.appendChild(p);      
    this.restaurantesdb = data;
    this.restaurantesdb.forEach(element => {
    marker([element.latitud, element.longitud]).addTo(mapa).bindPopup(`<img style="width: 50px;height: 50px;border-radius:5px;" src="${element.ciudad}" alt="">${element.nombre}`);
    
  });
      
  }, error => {
      console.log(error)
  })

  }

}
