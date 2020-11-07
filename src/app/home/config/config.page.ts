import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(public router: Router, public nav:NavController, public auth:AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.auth.signOut().then(
      data=>{
        console.log("Logout realizado com sucesso!")
      }
    )
  }
}
