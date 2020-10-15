import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvosPage } from './salvos.page';

describe('SalvosPage', () => {
  let component: SalvosPage;
  let fixture: ComponentFixture<SalvosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
