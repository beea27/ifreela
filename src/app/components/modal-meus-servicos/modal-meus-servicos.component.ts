import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { ServicoModel } from './../../interfaces/users';

@Component({
  selector: 'app-modal-meus-servicos',
  templateUrl: './modal-meus-servicos.component.html',
  styleUrls: ['./modal-meus-servicos.component.scss'],
})
export class ModalMeusServicosComponent implements OnInit {

  submitted = false;
  cadastroServicoForm: FormGroup;
  user: Users;
  @Input() website: string;

  constructor(private navParams: NavParams, private modalController: ModalController, fb: FormBuilder, public auth: AuthService) {
    // componentProps can also be accessed at construction time using NavParams
    let cadastroServico = { categoria: '', nome: '', contato: '', descricao: '' };

    this.cadastroServicoForm = fb.group({
      categoria: [cadastroServico.categoria],
      nome: [cadastroServico.nome],
      contato: [cadastroServico.contato],
      descricao: [cadastroServico.descricao]
    });
    this.auth.getDados().subscribe(result => {
      if (this.user) {
        return;
      }
      this.user = result[0];
    })
  }

  formSalvar() {
    let data = this.cadastroServicoForm.value;
    this.submitted = true;

    if (this.cadastroServicoForm.valid) {
      this.user
      let servico: ServicoModel = {
        categoria: data.categoria,
        nome: data.nome,
        contato: data.contato,
        descricao: data.descricao,
        nomePrestador: this.user.nome,
        like: false
      };
      if (!this.user.servicos) {
        this.user.servicos = [];
      }
      this.user.servicos.push(servico);
      this.auth.updateUser(this.user);
    }
    //  this.router.navigateByUrl('/signup');
  }
  ngOnInit() {
  }


  // Sending data from modal to page
  settingIonic(version: string) {
    this.modalController.dismiss(
      { ionic: version },
      'confirm'
    );
  }

  closeModal() { this.modalController.dismiss(); }
}
