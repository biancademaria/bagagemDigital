import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanadaPage } from './canada.page';

describe('CanadaPage', () => {
  let component: CanadaPage;
  let fixture: ComponentFixture<CanadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
