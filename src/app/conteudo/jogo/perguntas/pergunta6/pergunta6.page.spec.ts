import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pergunta6Page } from './pergunta6.page';

describe('Pergunta6Page', () => {
  let component: Pergunta6Page;
  let fixture: ComponentFixture<Pergunta6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pergunta6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
