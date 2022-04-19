import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgetComponent } from './studentget.component';

describe('StudentgetComponent', () => {
  let component: StudentgetComponent;
  let fixture: ComponentFixture<StudentgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});