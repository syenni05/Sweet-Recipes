import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedVelvetCupcakePage } from './red-velvet-cupcake.page';

describe('RedVelvetCupcakePage', () => {
  let component: RedVelvetCupcakePage;
  let fixture: ComponentFixture<RedVelvetCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedVelvetCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedVelvetCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
