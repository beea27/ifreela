import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.scss'],
})
export class DetalhesServicoComponent implements OnInit {
  submitted = false;
  editaServicoForm: FormGroup;
  @Input() user: Users;

  constructor(private navParams: NavParams, private modalController: ModalController, fb: FormBuilder, public auth: AuthService) {
    // componentProps can also be accessed at construction time using NavParams
    let editaServico = { categoria: 'servico.categoria', nome: 'servico.nome', contato: 'servico.contato', descricao: 'servico.descricao' };

    this.editaServicoForm = fb.group({
      categoria: [editaServico.categoria],
      nome: [editaServico.nome],
      contato: [editaServico.contato],
      descricao: [editaServico.descricao]
    });
  }

  formSalvar() {
    let data = this.editaServicoForm.value;
    this.submitted = true;

    if (this.editaServicoForm.valid) {
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
