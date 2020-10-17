import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEndPage } from '../cadastro-end/cadastro-end.page';
import { CadastroLoginPage } from './cadastro-login.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLoginPage
  },
  {
    path: 'cadastro-end',
    component: CadastroEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLoginPageRoutingModule {}
