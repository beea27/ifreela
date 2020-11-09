import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardMeusServicosComponent } from './card-meus-servicos/card-meus-servicos.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { DetalhesServicoComponent } from './detalhes-servico/detalhes-servico.component';
import { ModalMeusServicosComponent } from './modal-meus-servicos/modal-meus-servicos.component';


@NgModule({
  declarations: [CardComponent, CardMeusServicosComponent, DetalhesServicoComponent, ModalMeusServicosComponent],
  exports: [CardComponent, CardMeusServicosComponent, DetalhesServicoComponent, ModalMeusServicosComponent],
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
