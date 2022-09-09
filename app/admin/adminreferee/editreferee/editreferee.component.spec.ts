import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrefereeComponent } from './editreferee.component';

describe('EditrefereeComponent', () => {
  let component: EditrefereeComponent;
  let fixture: ComponentFixture<EditrefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrefereeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
