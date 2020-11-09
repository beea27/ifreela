import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalController: ModalController) {}

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
