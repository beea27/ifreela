import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  loginError: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  constructor(public router: Router, private auth: AuthService,
    fb: FormBuilder) {

    let login = { email: '', password: '', lastpassword: false };
    let lastpasswordStorage = JSON.parse(localStorage.getItem('lastpassword'));

    if (lastpasswordStorage != null) {
      login.lastpassword = lastpasswordStorage.lastpassword;
      login.email = lastpasswordStorage.email;
      login.password = lastpasswordStorage.password;
    }

    this.loginForm = fb.group({
      email: [login.email, Validators.compose([Validators.required, Validators.email])],
      password: [login.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      lastpassword: [login.lastpassword]
    });
  }

  ngOnInit() {


  }

  onLogin() {


    let data = this.loginForm.value;
    this.submitted = true;

    if (this.loginForm.valid) {

      if (data.lastpassword) {
        localStorage.setItem('lastpassword', JSON.stringify({ email: data.email, password: data.password, lastpassword: data.lastpassword }));
      } else {
        localStorage.removeItem('lastpassword');
      }

      let credentials = {
        email: data.email,
        password: data.password
      };

      this.auth.signInWithEmail(credentials)
        .then(
          () => this.router.navigateByUrl('/home'),
          error => {
            this.loginError = error.message;
            console.log(error.message);
          }
        );
      // this.userData.login(this.login.username);

    }
  }

  onSignup() {
    let data = this.loginForm.value;
    this.submitted = true;

    if (this.loginForm.valid) {
      let credentials = {
        email: data.email,
        password: data.password
      };
      //Se o usuário não existir, irá cadastrar automaticamente
      this.auth.signUp(credentials)
        .then(
          () => this.router.navigateByUrl('/home'),
          error => {
            this.loginError = error.message;
            console.log(error.message);
          });
    }
    //  this.router.navigateByUrl('/signup');
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  resetPassword() {

  }

  loginWithGoogle() {
    this.auth.signInWithGoogle().then(
      () => this.router.navigateByUrl('/home'),
      error => console.log(error.message)
    );
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

}