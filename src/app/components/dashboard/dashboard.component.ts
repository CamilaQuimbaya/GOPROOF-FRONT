import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() title:any;
  get usuario() {
    return this.authService.usuario;
  }

  constructor(private router: Router,
    private authService: AuthService) { }

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
  logout(){
    this.router.navigateByUrl('');
    this.authService.logout();
  }
}
