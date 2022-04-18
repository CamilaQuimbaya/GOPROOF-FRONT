import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-booking',
  templateUrl: './registro-booking.component.html',
  styleUrls: ['./registro-booking.component.css']
})
export class RegistroBookingComponent implements OnInit {

  formBooki: FormGroup;
  id:string|null;


  constructor(private fb: FormBuilder, private _bookingService: BookingService, private router: Router, private idBookinPath: ActivatedRoute) {
    this.formBooki = this.fb.group({
      titulo: ['Cumpleaños Erick', Validators.required],
      descripcion: ['cena para 6 personas', Validators.required],
      fecha: ['11 de mayo de 2022', Validators.required],
      hora: ['8 horas y 30 minutos de la noche', Validators.required],
      lugar: ['Restaurante la divina comedia', Validators.required],
    })
    this.id = this.idBookinPath.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitada()
  }
  infoBooking(){
    console.log(this.formBooki)

    const data_Booking: Booking ={
        titulo:this.formBooki.get('titulo')?.value,
        descripcion:this.formBooki.get('descripcion')?.value,
        fecha:this.formBooki.get('fecha')?.value,
        hora:this.formBooki.get('hora')?.value,
        lugar:this.formBooki.get('lugar')?.value
      }


      console.log(data_Booking)
      if (this.id !== null){
          this._bookingService.putBooking(this.id, data_Booking).subscribe(data => {
              this.router.navigate(['/Bookings'])

              Swal.fire({
                  icon: 'success',
                  title:'Genial!',
                  text: 'reserva actualizada exitosamente'
              })
          },error => {
              Swal.fire({
                  icon: 'error',
                  title:'Algo esta pasando',
                  text: 'Comunicate con el Administrador'
              })
          })
      }else{
          this._bookingService.postBooking(data_Booking).subscribe(data => {
              this.router.navigate(['/amigos'])

              Swal.fire({
                  icon: 'success',
                  title:'Genial!',
                  text: 'reserva creada exitosamente'
              })
          }, error => {
              Swal.fire({
                  icon: 'error',
                  title:'Algo esta pasando',
                  text: 'Comunicate con el Administrador'
              })
          })
      }
}
accionSolicitada(){
  if (this.id !== null){
      //cuando el usuario actualiza
      this._bookingService.getBooking(this.id).subscribe(data => {
          this.formBooki.setValue({
              titulo: data.titulo,
              descripcion: data.descripcion,
              fecha: data.fecha,
              hora: data.hora,
              lugar: data.lugar
          })
      }, error => {
          console.log(error)
      })
  }
}
}
