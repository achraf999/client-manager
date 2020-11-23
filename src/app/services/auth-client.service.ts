import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthClientService {


  constructor(private afa: AngularFireAuth) { }

  login(email: string, password: string)
  {
    return new Promise((resolve, reject) =>
    {
      this.afa.signInWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))
    })
  }

  getAuth()
  {
    return this.afa.authState.pipe(map(auth => auth));
  }


  loginWithGoogle() 
  {
    return new Promise((resolve, reject) =>
    {
      this.afa.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
      .then((userData) => resolve(userData), (error) => reject(error))
    })
  }

  logOut()
  {
    this.afa.signOut();
    Swal.fire({
      title: 'Successfully logged in',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  register(email: string, password: string)
  {
    return new Promise((resolve, reject) =>
    {
      this.afa.createUserWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))
    })
  }

}
