import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RainbowCupcakePage } from './rainbow-cupcake.page';

describe('RainbowCupcakePage', () => {
  let component: RainbowCupcakePage;
  let fixture: ComponentFixture<RainbowCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainbowCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RainbowCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
