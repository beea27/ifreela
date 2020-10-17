import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroEndPage } from './cadastro-end.page';

describe('CadastroEndPage', () => {
  let component: CadastroEndPage;
  let fixture: ComponentFixture<CadastroEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
