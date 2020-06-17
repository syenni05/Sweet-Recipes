import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlackForestCakePage } from './black-forest-cake.page';

describe('BlackForestCakePage', () => {
  let component: BlackForestCakePage;
  let fixture: ComponentFixture<BlackForestCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackForestCakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlackForestCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
