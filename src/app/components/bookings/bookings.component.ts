import { Component, OnInit } from '@angular/core';

interface User{
  image:String,
  titlee:String,
  desc:String,
  button1:String,
  button2:string
}
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  users : User[];
  constructor() { 
    this.users = [
      {
        image:"Aqui",
        titlee:"Marzo 28<br>Restaurant",
        desc:"Almuerzo en familia",
        button1:"Cancelar",
        button2:"Chat"
      },
      {
        image:"Aqui",
        titlee:"Marzo 27<br>Restaurant",
        desc:"Cena para 4",
        button1:"Cancelar",
        button2:"Chat"
      },
      {
        image:"Aqui",
        titlee:"Marzo 26<br>Restaurant",
        desc:"Cumpleaños",
        button1:"Cancelar",
        button2:"Chat"
      },
      {
        image:"Aqui",
        titlee:"Marzo 25<br>Restaurant",
        desc:"Desayuno en pareja",
        button1:"Cancelar",
        button2:"Chat"
      },
      {
        image:"Aqui",
        titlee:"Marzo 24<br>Restaurant",
        desc:"Reunion familiar",
        button1:"Cancelar",
        button2:"Chat"
      },
      {
        image:"Aqui",
        titlee:"Marzo 22<br>Restaurant",
        desc:"Negocios",
        button1:"Cancelar",
        button2:"Chat"
      }
    ]
  }

  ngOnInit(): void {
  }

}