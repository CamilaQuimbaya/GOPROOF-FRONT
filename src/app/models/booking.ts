export class Booking{
    _id?: any;
    titulo: string;
    descripcion: string;
    fecha: string;
    hora: string;
    lugar: string;
  
    constructor(tituloBooking: string, descripcionBooking: string, fechaBooking: string, horaBooking: string, lugarBooking: string ){
        this.titulo = tituloBooking;
        this.descripcion = descripcionBooking;
        this.fecha = fechaBooking;
        this.hora = horaBooking;
        this.lugar = lugarBooking;
    }
  }