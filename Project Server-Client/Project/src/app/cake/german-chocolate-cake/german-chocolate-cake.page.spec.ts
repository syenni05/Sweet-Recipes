import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GermanChocolateCakePage } from './german-chocolate-cake.page';

describe('GermanChocolateCakePage', () => {
  let component: GermanChocolateCakePage;
  let fixture: ComponentFixture<GermanChocolateCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanChocolateCakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GermanChocolateCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
