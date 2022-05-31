import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteOneComponent } from './child-route-one.component';

describe('ChildRouteOneComponent', () => {
  let component: ChildRouteOneComponent;
  let fixture: ComponentFixture<ChildRouteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
