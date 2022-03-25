export class Restaurant {
    nombre: string;
    descripcion: string;
    menu:[string];
    categoria:string;
    numero: number;
    ciudad: string;
    parqueadero: string;
    horario: string;
    longitud: any;
    latitud: any;
    
    constructor(nombre: string, descripcion: string, menu:[string], categoria:string , 
        numero: number, ciudad: string, parqueadero: string, horario: string, longitud:any, latitud:any) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.menu = menu;
    this.categoria = categoria;
    this.numero = numero;
    this.ciudad = ciudad;
    this.parqueadero = parqueadero;
    this.horario = horario;
    this.longitud = longitud;
    this.latitud = latitud;
    }
}