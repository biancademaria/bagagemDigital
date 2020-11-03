import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pag1Page } from './pag1.page';

describe('Pag1Page', () => {
  let component: Pag1Page;
  let fixture: ComponentFixture<Pag1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pag1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
