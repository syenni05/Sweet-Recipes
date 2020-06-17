import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialMochaCupcakePage } from './special-mocha-cupcake.page';

describe('SpecialMochaCupcakePage', () => {
  let component: SpecialMochaCupcakePage;
  let fixture: ComponentFixture<SpecialMochaCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialMochaCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialMochaCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
