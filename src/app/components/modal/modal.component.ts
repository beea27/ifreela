import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { Users } from 'src/app/interfaces/users';
import { ServicoModel } from './../../interfaces/users';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() tipoServico: string;
  servicos: ServicoModel[] = [];
  @Input() user: Users;
  constructor(private modalController: ModalController, private auth: AuthService, private ngZone: NgZone) {
    this.auth.getDados().subscribe(result => {
      if (!this.user) {
        this.user = result[0];
      }
    });
  }

  getData() {
    this.auth.getAll().subscribe(result => {
      if (this.servicos.length > 0) {
        return;
      }
      result.forEach(item => {
        if (item.servicos) {
          item.servicos.forEach(servico => {
            if (servico.categoria.toLowerCase() === this.tipoServico.toLowerCase()) {
              const isFavorite = _.filter(this.user.favoritos, { nome: servico.nome })
              isFavorite.length > 0 ? servico.like = true : servico.like = false;
              this.ngZone.run(() => {
                this.servicos.push(servico);
              });
            }
          });
        }
      });
    });
  }

  // Sending data from modal to page
  settingIonic(version: string) {
    this.modalController.dismiss(
      { ionic: version },
      'confirm'
    );
  }

  closeModal() { this.modalController.dismiss(); }

  settingJavascript() { }

  settingAngular(name: string) { }

  ngOnInit() {
    this.getData();
  }

}
