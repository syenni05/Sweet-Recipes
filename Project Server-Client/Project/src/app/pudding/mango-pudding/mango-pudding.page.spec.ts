import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangoPuddingPage } from './mango-pudding.page';

describe('MangoPuddingPage', () => {
  let component: MangoPuddingPage;
  let fixture: ComponentFixture<MangoPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangoPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangoPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
