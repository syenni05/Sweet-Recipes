import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VanillaPuddingPage } from './vanilla-pudding.page';

describe('VanillaPuddingPage', () => {
  let component: VanillaPuddingPage;
  let fixture: ComponentFixture<VanillaPuddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanillaPuddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VanillaPuddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
