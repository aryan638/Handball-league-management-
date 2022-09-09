import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookedeventComponent } from './viewbookedevent.component';

describe('ViewbookedeventComponent', () => {
  let component: ViewbookedeventComponent;
  let fixture: ComponentFixture<ViewbookedeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookedeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookedeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
