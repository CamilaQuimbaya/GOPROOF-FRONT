import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  listaBooking: Booking[] = []

  constructor(private _bookingService: BookingService) {  }

  ngOnInit(): void {
    this.obtenerBookings()
  }

  obtenerBookings(){
    this._bookingService.getBookings().subscribe(data => {
        console.log(data);
        this.listaBooking = data
    }, error => {
        console.log(error);
    })
}
eliminarBooking(id: string){
  Swal.fire({
      title: 'En serio quieres eliminarlo :(?',
      text:"Esta accion no se podra deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar'
  }).then((result) => {
      if(result.isConfirmed){
          this._bookingService.deleteBooking(id).subscribe(data => {
              Swal.fire(
                  'Borrado!',
                  'tu reserva se ha borrado exitosamente',
                  'success'
              )
              this.obtenerBookings()
          }, error =>{
              console.log(error);
          })

      }
  })
}
}
