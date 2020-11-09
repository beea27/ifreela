import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLoginPage } from './cadastro-login.page';
import { LoginPage } from '../../login/login.page'
const routes: Routes = [
  {
    path: '',
    component: CadastroLoginPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLoginPageRoutingModule {}
