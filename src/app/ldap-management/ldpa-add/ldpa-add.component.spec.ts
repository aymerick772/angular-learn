import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdpaAddComponent } from './ldpa-add.component';

describe('LdpaAddComponent', () => {
  let component: LdpaAddComponent;
  let fixture: ComponentFixture<LdpaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LdpaAddComponent]
    });
    fixture = TestBed.createComponent(LdpaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
