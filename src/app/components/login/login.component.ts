import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
 

  constructor(private authService: AuthClientService, private route: Router) { }

  ngOnInit(): void 
  {

  }


  onLogIn()
  {
    this.authService.login(this.email, this.password)
    .then(auth  =>
      {
        if(auth)
        {
          Swal.fire({
            title: 'Successfully logged in',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          this.route.navigate(['/']);

        }
      })
      .catch(error =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message
          })
        })
        
  }


  onLogInWithGoogle()
  {
    this.authService.loginWithGoogle()
    .then(auth  =>
      {
        if(auth)
        {
          Swal.fire({
            title: 'Successfully logged in',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          this.route.navigate(['/']);

        }
      })
      .catch(error =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message
          })
        })
        
  }


}
