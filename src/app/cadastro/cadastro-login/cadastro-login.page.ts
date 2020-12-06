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
      email: [cadastro.email, Validators.compose([Validators.maxLength(70),Validators.required, Validators.email, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      password: [cadastro.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      nome: [cadastro.nome, Validators.compose([Validators.required, Validators.minLength(4)])],
      dt_nasc: [cadastro.dt_nasc, Validators.compose([Validators.required])],
      cpf: [cadastro.cpf],
      cep: [cadastro.cep],
      cidade: [cadastro.cidade, Validators.compose([Validators.required, Validators.minLength(4)])],
      uf: [cadastro.uf, Validators.compose([Validators.required])],
      endereco: [cadastro.endereco, Validators.compose([Validators.required, Validators.minLength(4)])],
      bairro: [cadastro.bairro, Validators.compose([Validators.required, Validators.minLength(4)])],
      numero: [cadastro.numero, Validators.compose([Validators.required])],
      complemento: [cadastro.complemento, Validators.compose([Validators.required, Validators.minLength(4)])]

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