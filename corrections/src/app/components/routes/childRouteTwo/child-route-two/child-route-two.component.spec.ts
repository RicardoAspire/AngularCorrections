import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteTwoComponent } from './child-route-two.component';

describe('ChildRouteTwoComponent', () => {
  let component: ChildRouteTwoComponent;
  let fixture: ComponentFixture<ChildRouteTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouteTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
