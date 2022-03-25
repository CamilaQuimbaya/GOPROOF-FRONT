import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-profile',
  templateUrl: './mi-profile.component.html',
  styleUrls: ['./mi-profile.component.css']
})
export class MiProfileComponent  {

    get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
    private authService: AuthService ) { }

    

}
