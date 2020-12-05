import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Input() like: boolean;

  @Output() likeChange = new EventEmitter<boolean>();

  constructor(public platform: Platform) {}

  chat() {
    var whats;

    this.platform.ready().then(() => {
      whats.plugins.Whatsapp.send('+5511962700772');
    });
  }

  ngOnInit() {}
}