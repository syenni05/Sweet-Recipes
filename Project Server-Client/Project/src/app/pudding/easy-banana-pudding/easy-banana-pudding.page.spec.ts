import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyBananaPuddingPage } from './easy-banana-pudding.page';

describe('EasyBananaPuddingPage', () => {
  let component: EasyBananaPuddingPage;
  let fixture: ComponentFixture<EasyBananaPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyBananaPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyBananaPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
