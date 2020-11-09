import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private users = new Array<Users>();
  private userSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.userSubscription = this.authService.getDados().subscribe(data => {
      this.users = data;
    });
    //this.users = this.authService.getDados();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
