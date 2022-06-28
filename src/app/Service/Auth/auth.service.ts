import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth

  ) { }


  public login(user){
    this.fireauth.signInWithEmailAndPassword('mohammed@gmail.com','zakariadaoudi123' )
      .then(res => {
        if (res.user) {
          console.log(res.user);
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
      });

  }
}
