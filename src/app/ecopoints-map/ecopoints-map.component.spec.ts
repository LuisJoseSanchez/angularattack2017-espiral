import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopointsMapComponent } from './ecopoints-map.component';

describe('EcopointsMapComponent', () => {
  let component: EcopointsMapComponent;
  let fixture: ComponentFixture<EcopointsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcopointsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcopointsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
