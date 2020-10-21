import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JapaoPage } from './japao.page';

describe('JapaoPage', () => {
  let component: JapaoPage;
  let fixture: ComponentFixture<JapaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JapaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
