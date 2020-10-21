import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsraelPage } from './israel.page';

describe('IsraelPage', () => {
  let component: IsraelPage;
  let fixture: ComponentFixture<IsraelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsraelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsraelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
