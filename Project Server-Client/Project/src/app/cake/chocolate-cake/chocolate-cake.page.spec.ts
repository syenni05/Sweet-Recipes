import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChocolateCakePage } from './chocolate-cake.page';

describe('ChocolateCakePage', () => {
  let component: ChocolateCakePage;
  let fixture: ComponentFixture<ChocolateCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateCakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChocolateCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
