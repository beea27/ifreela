import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-login',
    loadChildren: () => import('./cadastro/cadastro-login/cadastro-login.module').then(m => m.CadastroLoginPageModule)
  },
  {
    path: 'cadastro-end',
    loadChildren: () => import('./cadastro/cadastro-end/cadastro-end.module').then(m => m.CadastroEndPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
