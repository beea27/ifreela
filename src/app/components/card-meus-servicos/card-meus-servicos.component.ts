import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';
import { DetalhesServicoComponent } from '../../components/detalhes-servico/detalhes-servico.component';
import { ServicoModel } from './../../interfaces/users';
@Component({
  selector: 'app-card-meus-servicos',
  templateUrl: './card-meus-servicos.component.html',
  styleUrls: ['./card-meus-servicos.component.scss'],
})
export class CardMeusServicosComponent implements OnInit {
  dataFromModal: any;
  user: Users;
  servicos: ServicoModel[];
  // public servicos: ServicoModel[] = [
  //   {categoria: 'UX/UI', nome: 'interface UX/UI', contato: '99999999', descricao: 'interdaces de sites, e-commerce, landing page'},
  //   {categoria: 'Desenvolvimento Web', nome: 'desenvolvimento web', contato: '99999999', descricao: 'desenvolvimento de sites, e-commerce, landing page'},
  //   {categoria: 'Aulas Online', nome: 'Aula de inglês', contato: '99999999', descricao: 'aulas de conversação e gramática'},
  // ]
  constructor(
    private modalController: ModalController,
    public auth: AuthService
  ) { }

  async modalDetalhes(servico: ServicoModel) {
    const modal = await this.modalController.create({
      component: DetalhesServicoComponent,
      componentProps: {
        servico,
        user: this.user
      },
      // cssClass: 'modal-meus-servicos-modal',
      backdropDismiss: false,
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }

  ngOnInit(): void {
    this.auth.getDados().subscribe(result => {
      this.user = result[0];
      if (!this.user.servicos) {
        this.user.servicos = [];
      }
      this.servicos = this.user.servicos;
    })
  }

}
