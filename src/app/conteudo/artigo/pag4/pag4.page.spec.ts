import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pag4Page } from './pag4.page';

describe('Pag4Page', () => {
  let component: Pag4Page;
  let fixture: ComponentFixture<Pag4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pag4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
