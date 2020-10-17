import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroLoginPage } from './cadastro-login.page';

describe('CadastroLoginPage', () => {
  let component: CadastroLoginPage;
  let fixture: ComponentFixture<CadastroLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
