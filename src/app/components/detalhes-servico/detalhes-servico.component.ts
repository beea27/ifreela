import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Servico } from '../card-meus-servicos/card-meus-servicos.component';

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.scss'],
})
export class DetalhesServicoComponent implements OnInit {

  @Input() servico: Servico;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.servico);
  }

  settingIonic(version: string) {
    this.modalController.dismiss(
      { ionic: version },
      'confirm'
      );
  }

  closeModal() { this.modalController.dismiss(); }

}
