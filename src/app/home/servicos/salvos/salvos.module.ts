import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvosPageRoutingModule } from './salvos-routing.module';

import { SalvosPage } from './salvos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvosPageRoutingModule
  ],
  declarations: [SalvosPage]
})
export class SalvosPageModule {}
