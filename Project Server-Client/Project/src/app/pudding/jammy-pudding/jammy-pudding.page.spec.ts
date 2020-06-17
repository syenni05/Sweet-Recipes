import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JammyPuddingPage } from './jammy-pudding.page';

describe('JammyPuddingPage', () => {
  let component: JammyPuddingPage;
  let fixture: ComponentFixture<JammyPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JammyPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JammyPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
