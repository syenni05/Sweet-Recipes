import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrawberryCakeRollPage } from './strawberry-cake-roll.page';

describe('StrawberryCakeRollPage', () => {
  let component: StrawberryCakeRollPage;
  let fixture: ComponentFixture<StrawberryCakeRollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawberryCakeRollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrawberryCakeRollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
