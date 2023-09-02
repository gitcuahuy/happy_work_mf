import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpShareComponent } from './hp-share.component';

describe('HpShareComponent', () => {
  let component: HpShareComponent;
  let fixture: ComponentFixture<HpShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
