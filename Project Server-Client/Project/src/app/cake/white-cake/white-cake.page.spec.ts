import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhiteCakePage } from './white-cake.page';

describe('WhiteCakePage', () => {
  let component: WhiteCakePage;
  let fixture: ComponentFixture<WhiteCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteCakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhiteCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
