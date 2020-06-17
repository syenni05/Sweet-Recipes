import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrawberryPuddingPage } from './strawberry-pudding.page';

describe('StrawberryPuddingPage', () => {
  let component: StrawberryPuddingPage;
  let fixture: ComponentFixture<StrawberryPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawberryPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrawberryPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
