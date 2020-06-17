import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuddingPage } from './pudding.page';

describe('PuddingPage', () => {
  let component: PuddingPage;
  let fixture: ComponentFixture<PuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
