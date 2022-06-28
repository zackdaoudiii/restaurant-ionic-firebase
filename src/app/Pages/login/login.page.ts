import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {TokenService} from '../../Service/token.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username;
  password;

  constructor(
    private fireauth: AngularFireAuth,
    private tokenService: TokenService,
    private route:Router

  ) { }

  ngOnInit() {
  }

  async login(){
      this.fireauth.signInWithEmailAndPassword('mohammed@gmail.com','zakariadaoudi123' )
        .then(res => {
          if (res.user) {
            // save token in locale storage
            res.user.getIdToken(true).then(
              (token)=> {
                this.tokenService.saveToken(token);
                this.route.navigate(['home']);
              }
            );

          }
        })
        .catch(err => {
          console.log(`login failed ${err}`);
        });
  }

}
