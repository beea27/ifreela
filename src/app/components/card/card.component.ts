import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as _ from 'lodash';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { ServicoModel } from './../../interfaces/users';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Output() likeChange = new EventEmitter<boolean>();
  @Input() user: Users;
  @Input() servicos: ServicoModel[];
  constructor(public platform: Platform, private auth: AuthService) { }

 

  favoritar(servico: ServicoModel) {
    if (!this.user.favoritos) {
      this.user.favoritos = [];
    }
    if (servico.like) {
      _.remove(this.user.favoritos, {
        nome: servico.nome
      });
    } else {
      this.user.favoritos.push(servico);
    }
    servico.like = !servico.like;
    this.auth.updateUser(this.user);
  }

  ngOnInit() {
    this.auth.getDados().subscribe(result => {
      if (!this.user) {
        this.user = result[0];
      }
      if (!this.servicos) {
        this.servicos = this.user.favoritos;
      }
    });
  }
}