import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspanhaPage } from './espanha.page';

describe('EspanhaPage', () => {
  let component: EspanhaPage;
  let fixture: ComponentFixture<EspanhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspanhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
