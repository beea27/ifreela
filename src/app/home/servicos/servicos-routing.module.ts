import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPage } from './servicos.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosPage,
    children: [
      {
        path: 'servicos',
        loadChildren: () => import('./servicos/servicos.module').then( m => m.ServicosPageModule)
      },
      {
        path: 'salvos',
        loadChildren: () => import('./salvos/salvos.module').then( m => m.SalvosPageModule)
      },
      {
        path: 'meus-servicos',
        loadChildren: () => import('./meus-servicos/meus-servicos.module').then( m => m.MeusServicosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPageRoutingModule {}
