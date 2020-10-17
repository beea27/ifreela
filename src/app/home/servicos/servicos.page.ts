import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent} from '../../components/modal-meus-servicos/modal-meus-servicos.component';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  type: string;

  ngOnInit() {
    this.type = 'servicos';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  dataFromModal;
  constructor(private modalController: ModalController) {}

  async modal_meus_servicos() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { website: 'edupala.com' },
      cssClass: 'modal-meus-servicos-modal',
      backdropDismiss: false,
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }

}
