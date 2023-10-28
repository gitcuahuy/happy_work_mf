import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareBigcityComponent } from './share-bigcity.component';

describe('ShareBigcityComponent', () => {
  let component: ShareBigcityComponent;
  let fixture: ComponentFixture<ShareBigcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareBigcityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareBigcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
