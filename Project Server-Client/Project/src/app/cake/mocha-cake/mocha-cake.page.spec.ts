import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MochaCakePage } from './mocha-cake.page';

describe('MochaCakePage', () => {
  let component: MochaCakePage;
  let fixture: ComponentFixture<MochaCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochaCakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MochaCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
