import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LemonCupcakePage } from './lemon-cupcake.page';

describe('LemonCupcakePage', () => {
  let component: LemonCupcakePage;
  let fixture: ComponentFixture<LemonCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemonCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LemonCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
