import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pergunta7Page } from './pergunta7.page';

describe('Pergunta7Page', () => {
  let component: Pergunta7Page;
  let fixture: ComponentFixture<Pergunta7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pergunta7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
