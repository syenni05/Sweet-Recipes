import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OreoCheesecakePage } from './oreo-cheesecake.page';

describe('OreoCheesecakePage', () => {
  let component: OreoCheesecakePage;
  let fixture: ComponentFixture<OreoCheesecakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OreoCheesecakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OreoCheesecakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
