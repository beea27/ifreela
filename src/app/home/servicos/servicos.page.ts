import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'servicos';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
