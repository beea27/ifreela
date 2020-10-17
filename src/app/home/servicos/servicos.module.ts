import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosPageRoutingModule } from './servicos-routing.module';

import { ServicosPage } from './servicos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalComponent} from '../../components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ServicosPage,ModalComponent]
})
export class ServicosPageModule {}
