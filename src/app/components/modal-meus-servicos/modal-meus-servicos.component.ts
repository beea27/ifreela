import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-meus-servicos',
  templateUrl: './modal-meus-servicos.component.html',
  styleUrls: ['./modal-meus-servicos.component.scss'],
})
export class ModalMeusServicosComponent implements OnInit {
  
  submitted = false;
  cadastroServicoForm: FormGroup;
  
  @Input() website: string;

  constructor(private navParams: NavParams, private modalController: ModalController, fb: FormBuilder) {
   // componentProps can also be accessed at construction time using NavParams
     let cadastroServico = { categoria:'', nome:'', contato:'', descricao: ''};

    this.cadastroServicoForm = fb.group({
      categoria: [cadastroServico.categoria],
      nome: [cadastroServico.nome],
      contato: [cadastroServico.contato],
      descricao: [cadastroServico.descricao]   
    });
  }

formSalvar() {
    let data = this.cadastroServicoForm.value;
    this.submitted = true;

    if (this.cadastroServicoForm.valid) {
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
