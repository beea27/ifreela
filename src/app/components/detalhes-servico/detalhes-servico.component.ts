import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.scss'],
})
export class DetalhesServicoComponent implements OnInit {
  
  submitted = false;
  editaServicoForm: FormGroup;
  
  @Input() website: string;

  constructor(private navParams: NavParams, private modalController: ModalController, fb: FormBuilder) {
   // componentProps can also be accessed at construction time using NavParams
     let editaServico = { categoria:'servico.categoria', nome:'servico.nome', contato:'servico.contato', descricao: 'servico.descricao'};

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
      let credentials = {
        categoria: data.categoria,
        nome: data.nome,
        contato: data.contato,
        descricao: data.descricao
      };
      console.log(credentials);
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
