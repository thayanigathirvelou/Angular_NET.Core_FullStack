import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStuComponent } from './edit-stu.component';

describe('EditStuComponent', () => {
  let component: EditStuComponent;
  let fixture: ComponentFixture<EditStuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStuComponent]
    });
    fixture = TestBed.createComponent(EditStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
