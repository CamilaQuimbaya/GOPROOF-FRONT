import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent{


    get usuario(){
    return this.authService.usuario
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
