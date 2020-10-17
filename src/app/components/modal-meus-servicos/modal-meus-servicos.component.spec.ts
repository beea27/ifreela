import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import {ModalMeusServicosComponent} from '../../components/modal-meus-servicos/modal-meus-servicos.component';

describe('ModalComponent', () => {
  let component: ModalMeusServicosComponent;
  let fixture: ComponentFixture<ModalMeusServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMeusServicosComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMeusServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
