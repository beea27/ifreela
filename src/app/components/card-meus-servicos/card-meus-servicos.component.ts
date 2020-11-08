import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalhesServicoComponent} from '../../components/detalhes-servico/detalhes-servico.component';

export interface Servico {
  categoria: string;
  nome: string;
  contato: string;
  descricao: string;
}

@Component({
  selector: 'app-card-meus-servicos',
  templateUrl: './card-meus-servicos.component.html',
  styleUrls: ['./card-meus-servicos.component.scss'],
})
export class CardMeusServicosComponent {
  dataFromModal: any;
 
  constructor(
    private modalController: ModalController
  ) {}

  public servicos: Servico[] = [
    {categoria: 'UX/UI', nome: 'interface UX/UI', contato: '99999999', descricao: 'interdaces de sites, e-commerce, landing page'},
    {categoria: 'Desenvolvimento Web', nome: 'desenvolvimento web', contato: '99999999', descricao: 'desenvolvimento de sites, e-commerce, landing page'},
    {categoria: 'Aulas Online', nome: 'Aula de inglês', contato: '99999999', descricao: 'aulas de conversação e gramática'},
  ]
  
  async modalDetalhes(servico: Servico) {
    const modal = await this.modalController.create({
      component: DetalhesServicoComponent,
      componentProps: { 
        website: 'edupala.com',
        servico
      },
      // cssClass: 'modal-meus-servicos-modal',
      backdropDismiss: false,
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }

}
