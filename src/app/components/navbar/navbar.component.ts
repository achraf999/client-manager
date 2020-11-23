import { Router } from '@angular/router';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userLoggedIn: string;

  constructor(private authService: AuthClientService, private route: Router) { }

  ngOnInit(): void 
  {
    this.authService.getAuth().subscribe(auth =>
      {
        if(auth)
        {
          this.isLoggedIn = true;
          this.userLoggedIn = auth.email;
        }
        else
        {
          this.isLoggedIn = false;
        }
      })
  }

  onLogOut()
  {
    this.authService.logOut();
    Swal.fire({
      title: 'Successfully logged out',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.route.navigate(['/login']);


  }

}
