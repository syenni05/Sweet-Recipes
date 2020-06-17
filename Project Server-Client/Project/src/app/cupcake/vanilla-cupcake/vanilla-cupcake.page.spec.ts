import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VanillaCupcakePage } from './vanilla-cupcake.page';

describe('VanillaCupcakePage', () => {
  let component: VanillaCupcakePage;
  let fixture: ComponentFixture<VanillaCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanillaCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VanillaCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
