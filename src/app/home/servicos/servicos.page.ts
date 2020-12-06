import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ModalMeusServicosComponent } from '../../components/modal-meus-servicos/modal-meus-servicos.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  arr: any[] = [];
  arr1: any[] = [];
  arrNome: any[] = [];
  arrFoto: any[] = [];
  type: string;

  ngOnInit() {
    this.type = 'servicos';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }



  dataFromModal;
  constructor(private modalController: ModalController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.arrNome.push("Eletricista",
        "Design",
        "Diarista",
        "Programador",
        "Jardineiro",
        "Fotógrafo");
      this.arrFoto.push("https://image.freepik.com/fotos-gratis/tecnico-tecnico-emprego_1426-1355.jpg",
        "https://images-ext-2.discordapp.net/external/1hoQ-Yrc_6V1rSfFjH_inTlRZ5t9LNVQfLJJ0YcF3v8/https/image.freepik.com/fotos-gratis/vista-superior-do-designer-grafico-trabalhando-com-tablet-grafico-e-laptop_23-2147652935.jpg",
        "https://images-ext-2.discordapp.net/external/MbD2P14v_Zs5HBkZpsstCE0acfTr57rcH_kvZkPJjqc/https/image.freepik.com/fotos-gratis/meio-de-um-faxineiro-feminino-limpando-a-mesa-de-madeira-com-pano_23-2148222259.jpg",
        "https://images-ext-1.discordapp.net/external/9wGn7WpmNykszID6VxssLHbPpzkQ4g9S9bsL59zNMSU/https/image.freepik.com/fotos-gratis/programador-trabalhando-no-computador-portatil-no-estudio-do-escritorio_90781-261.jpg",
        "https://images-ext-2.discordapp.net/external/utDpM5ysK33dxhlR3daeyVblNicOAGiMOC0Jb092g6s/https/image.freepik.com/fotos-gratis/plantas-de-corte-de-jardineiro_1426-1515.jpg",
        "https://images-ext-1.discordapp.net/external/p8dskWTdPMKLZXORaUehtkNzFYQ4YzJm3lxJVcukqD0/https/image.freepik.com/fotos-gratis/bonitao-africano-com-corte-de-cabelo-elegante-tirando-foto-na-camera-digital_171337-1345.jpg");

      for (var i = 0; i < this.arrNome.length; i++) {
        var obj = { name: this.arrNome[i], foto: this.arrFoto[i] }
        this.arr.push(obj);
      }

      this.arr1 = this.arr;
    })
  }

  filterArray(ev: any) {
    this.arr = this.arr1;
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.arr = this.arr1.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.foto.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

  async modal_meus_servicos() {
    const modal = await this.modalController.create({
      component: ModalMeusServicosComponent,
      componentProps: { website: 'edupala.com' },
      cssClass: 'modal-meus-servicos-modal',
      backdropDismiss: false
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }

  async modal(tipoServico: string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { tipoServico: tipoServico },
      cssClass: 'modal-meus-servicos-modal',
      backdropDismiss: false
    });

    modal.present();
    this.dataFromModal = await modal.onWillDismiss();
  }

}
