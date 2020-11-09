import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.page.html',
  styleUrls: ['./cadastro-login.page.scss'],
})
export class CadastroLoginPage implements OnInit {

  submitted = false;
  cadastroForm: FormGroup;
  cadastroError: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  constructor(public router: Router, private auth: AuthService, fb: FormBuilder) {

    let cadastro = { nome:'', dt_nasc:'', cpf:'', email: '', password: '', cep:'', cidade:'', uf:'', endereco:'', bairro:'', numero:'', complemento:''};
   
    this.cadastroForm = fb.group({
      email: [cadastro.email, Validators.compose([Validators.required, Validators.email])],
      password: [cadastro.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      nome: [cadastro.nome],
      dt_nasc: [cadastro.dt_nasc],
      cpf: [cadastro.cpf],
      cep: [cadastro.cep],
      cidade: [cadastro.cidade],
      uf: [cadastro.uf],
      endereco: [cadastro.endereco],
      bairro: [cadastro.bairro],
      numero: [cadastro.numero],
      complemento: [cadastro.complemento]

    });
  }

  ngOnInit() {


  }

  
  onSignup() {
    let data = this.cadastroForm.value;
    this.submitted = true;

    if (this.cadastroForm.valid) {
      let credentials = {
        uid: '',
        email: data.email,
        password: data.password,
        nome: data.nome,
        dt_nasc: data.dt_nasc,
        cpf: data.cpf,
        cep: data.cep,
        cidade: data.cidade,
        uf: data.uf,
        endereco: data.endereco,
        bairro: data.bairro,
        numero: data.numero,
        complemento: data.complemento
      };
      //Se o usuário não existir, irá cadastrar automaticamente
      this.auth.signUp(credentials)
        .then(
          () => this.router.navigateByUrl('/login'),
          error => {
            this.cadastroError = error.message;
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



  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

}