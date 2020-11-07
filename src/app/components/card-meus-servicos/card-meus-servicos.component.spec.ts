import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardMeusServicosComponent } from './card-meus-servicos.component';

describe('CardMeusServicosComponent', () => {
  let component: CardMeusServicosComponent;
  let fixture: ComponentFixture<CardMeusServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMeusServicosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardMeusServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
