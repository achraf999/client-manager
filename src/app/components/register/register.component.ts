import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/services/auth-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthClientService, private route: Router) { }

  ngOnInit(): void {
  }

  onRegister()
  {
    this.authService.register(this.email, this.password)
    .then(register =>
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
