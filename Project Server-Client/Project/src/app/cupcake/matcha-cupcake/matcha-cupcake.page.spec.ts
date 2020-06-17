import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchaCupcakePage } from './matcha-cupcake.page';

describe('MatchaCupcakePage', () => {
  let component: MatchaCupcakePage;
  let fixture: ComponentFixture<MatchaCupcakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchaCupcakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchaCupcakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
