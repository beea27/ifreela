import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicosPage } from '../home/servicos/servicos.page';
import { CadastroLoginPage } from '../cadastro/cadastro-login/cadastro-login.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'home',
    component: ServicosPage
  },
  {
    path: 'cadastro-login',
    component: CadastroLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
