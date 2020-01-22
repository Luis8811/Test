import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuuestionPage } from './quuestion.page';

describe('QuuestionPage', () => {
  let component: QuuestionPage;
  let fixture: ComponentFixture<QuuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
