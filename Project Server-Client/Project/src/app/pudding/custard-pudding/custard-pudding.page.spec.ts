import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustardPuddingPage } from './custard-pudding.page';

describe('CustardPuddingPage', () => {
  let component: CustardPuddingPage;
  let fixture: ComponentFixture<CustardPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustardPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustardPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
