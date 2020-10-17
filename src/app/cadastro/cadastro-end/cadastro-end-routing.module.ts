import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEndPage } from './cadastro-end.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEndPageRoutingModule {}
