import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pergunta2Page } from './pergunta2.page';

describe('Pergunta2Page', () => {
  let component: Pergunta2Page;
  let fixture: ComponentFixture<Pergunta2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pergunta2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
