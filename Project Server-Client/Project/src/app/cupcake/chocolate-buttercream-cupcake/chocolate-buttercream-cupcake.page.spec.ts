import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChocolateButtercreamCupcakePage } from './chocolate-buttercream-cupcake.page';

describe('ChocolateButtercreamCupcakePage', () => {
  let component: ChocolateButtercreamCupcakePage;
  let fixture: ComponentFixture<ChocolateButtercreamCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateButtercreamCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChocolateButtercreamCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
