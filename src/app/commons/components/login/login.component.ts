import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login-models/login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: Login={};
  hamburgerClass: boolean = false;
  message: string = '';
  //show hide div variables
  userlogin = true;


  constructor(
    private router: Router
  ) {}

  user_login()
  {
    this.userlogin = true;

  }
  ngOnInit(): void {
    ;
  }

  Iniciarsession(): void {

    console.log(this.user.correo);
    if (this.user.correo =='' || this.user.correo==null)
    {
      this.message = "Ingrese usuario y contraseña";
    }
  }
  login() {
    //
  }

}
