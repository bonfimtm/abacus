import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradeCounterComponent } from './grade-counter.component';

describe('GradeCounterComponent', () => {
  let component: GradeCounterComponent;
  let fixture: ComponentFixture<GradeCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeCounterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
