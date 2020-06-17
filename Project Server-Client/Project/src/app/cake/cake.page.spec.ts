import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CakePage } from './cake.page';

describe('CakePage', () => {
  let component: CakePage;
  let fixture: ComponentFixture<CakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
