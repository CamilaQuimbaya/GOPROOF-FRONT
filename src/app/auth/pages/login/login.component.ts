import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    email:  ['lauraQ@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder,
                private router: Router,
                private authsService: AuthService) { }


  login(){
    console.log(this.miFormulario.value);
    const {email, password} = this.miFormulario.value

    this.authsService.login(email, password)
    .subscribe(ok => {

      if( ok === true ) {
        this.router.navigateByUrl('/dashboarduser');
      }else{
        //TODO: MOSTRAR MENSAJE DE ERROR
        Swal.fire('Error', ok, 'error');
      }
    });
    // this.router.navigateByUrl('/dashboarduser')
  }

}
