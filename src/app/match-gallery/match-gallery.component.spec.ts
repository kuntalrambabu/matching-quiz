import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGalleryComponent } from './match-gallery.component';

describe('MatchGalleryComponent', () => {
  let component: MatchGalleryComponent;
  let fixture: ComponentFixture<MatchGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
