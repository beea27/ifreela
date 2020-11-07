import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardMeusServicosComponent } from './card-meus-servicos/card-meus-servicos.component';

@NgModule({
  declarations: [CardComponent, CardMeusServicosComponent],
  exports: [CardComponent, CardMeusServicosComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
