import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaContainerComponent } from './insta-container.component';

describe('InstaContainerComponent', () => {
  let component: InstaContainerComponent;
  let fixture: ComponentFixture<InstaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
