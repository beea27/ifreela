import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLoginPageRoutingModule } from './cadastro-login-routing.module';

import { CadastroLoginPage } from './cadastro-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLoginPageRoutingModule
  ],
  declarations: [CadastroLoginPage]
})
export class CadastroLoginPageModule {}
