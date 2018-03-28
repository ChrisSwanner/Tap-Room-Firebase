import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTapComponent } from './beer-tap.component';

describe('BeerTapComponent', () => {
  let component: BeerTapComponent;
  let fixture: ComponentFixture<BeerTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
