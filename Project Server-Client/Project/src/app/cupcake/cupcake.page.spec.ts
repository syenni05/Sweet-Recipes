import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CupcakePage } from './cupcake.page';

describe('CupcakePage', () => {
  let component: CupcakePage;
  let fixture: ComponentFixture<CupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
