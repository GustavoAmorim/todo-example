import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTopToolbarComponent } from './principal-top-toolbar.component';

describe('PrincipalTopToolbarComponent', () => {
  let component: PrincipalTopToolbarComponent;
  let fixture: ComponentFixture<PrincipalTopToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTopToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
