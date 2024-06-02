import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdpaEditComponent } from './ldpa-edit.component';

describe('LdpaEditComponent', () => {
  let component: LdpaEditComponent;
  let fixture: ComponentFixture<LdpaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LdpaEditComponent]
    });
    fixture = TestBed.createComponent(LdpaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
