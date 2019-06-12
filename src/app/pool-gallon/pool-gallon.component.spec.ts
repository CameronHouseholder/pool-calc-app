import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolGallonComponent } from './pool-gallon.component';

describe('PoolGallonComponent', () => {
  let component: PoolGallonComponent;
  let fixture: ComponentFixture<PoolGallonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolGallonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolGallonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
