import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilPage } from './perfil.page';
import { CadastroEndPage } from '../../cadastro/cadastro-end/cadastro-end.page';


const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
  },
  {
    path: 'cadastro-end',
    component: CadastroEndPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
