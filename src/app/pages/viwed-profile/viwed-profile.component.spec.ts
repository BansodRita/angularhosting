import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwedProfileComponent } from './viwed-profile.component';

describe('ViwedProfileComponent', () => {
  let component: ViwedProfileComponent;
  let fixture: ComponentFixture<ViwedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViwedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
