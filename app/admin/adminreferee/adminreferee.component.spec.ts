import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrefereeComponent } from './adminreferee.component';

describe('AdminrefereeComponent', () => {
  let component: AdminrefereeComponent;
  let fixture: ComponentFixture<AdminrefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrefereeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
