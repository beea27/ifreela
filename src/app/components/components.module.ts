import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardMeusServicosComponent } from './card-meus-servicos/card-meus-servicos.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { DetalhesServicoComponent } from './detalhes-servico/detalhes-servico.component';

@NgModule({
  declarations: [CardComponent, CardMeusServicosComponent, DetalhesServicoComponent],
  exports: [CardComponent, CardMeusServicosComponent, DetalhesServicoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ComponentsModule { }
