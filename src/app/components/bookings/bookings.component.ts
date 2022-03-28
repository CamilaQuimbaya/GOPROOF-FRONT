import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';


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
}