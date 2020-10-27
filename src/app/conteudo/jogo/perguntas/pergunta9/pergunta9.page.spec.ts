import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pergunta9Page } from './pergunta9.page';

describe('Pergunta9Page', () => {
  let component: Pergunta9Page;
  let fixture: ComponentFixture<Pergunta9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pergunta9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
