import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEndPageRoutingModule } from './cadastro-end-routing.module';

import { CadastroEndPage } from './cadastro-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEndPageRoutingModule
  ],
  declarations: [CadastroEndPage]
})
export class CadastroEndPageModule {}
