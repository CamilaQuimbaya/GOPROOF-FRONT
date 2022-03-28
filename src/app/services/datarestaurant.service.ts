import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatarestaurantService {
  nombre: string = "";
  descripcion: string ="";
  menu:[string]=[""];
  categoria:string="";
  numero: number=0;
  ciudad: string="";
  parqueadero: string="";
  horario: string="";
  longitud: any ="";
  latitud: any="";
  constructor() { }
}
