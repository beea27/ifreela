import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() website: string;

  constructor(private navParams: NavParams, private modalController: ModalController) {
   // componentProps can also be accessed at construction time using NavParams
    console.log(this.navParams.get('website'));
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

  settingJavascript() {}

  settingAngular(name: string) {}

}
