import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedCommonComponent } from './shared-common.component';

describe('SharedCommonComponent', () => {
  let component: SharedCommonComponent;
  let fixture: ComponentFixture<SharedCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
