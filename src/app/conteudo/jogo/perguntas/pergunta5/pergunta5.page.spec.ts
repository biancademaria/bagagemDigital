import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pergunta5Page } from './pergunta5.page';

describe('Pergunta5Page', () => {
  let component: Pergunta5Page;
  let fixture: ComponentFixture<Pergunta5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pergunta5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
