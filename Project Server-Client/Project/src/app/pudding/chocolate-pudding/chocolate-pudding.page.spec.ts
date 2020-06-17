import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChocolatePuddingPage } from './chocolate-pudding.page';

describe('ChocolatePuddingPage', () => {
  let component: ChocolatePuddingPage;
  let fixture: ComponentFixture<ChocolatePuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolatePuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChocolatePuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
