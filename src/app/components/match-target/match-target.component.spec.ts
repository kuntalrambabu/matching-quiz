import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTargetComponent } from './match-target.component';

describe('MatchTargetComponent', () => {
  let component: MatchTargetComponent;
  let fixture: ComponentFixture<MatchTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
