import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigPage } from './config.page';
import { LoginPage } from '../../login/login.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  },
  {
    path: 'login',
    component: LoginPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPageRoutingModule {}
