import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtSnackComponent } from './alrt-snack.component';

describe('AlrtSnackComponent', () => {
  let component: AlrtSnackComponent;
  let fixture: ComponentFixture<AlrtSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlrtSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlrtSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
