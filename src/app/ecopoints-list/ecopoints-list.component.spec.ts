import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopointsListComponent } from './ecopoints-list.component';

describe('EcopointsListComponent', () => {
  let component: EcopointsListComponent;
  let fixture: ComponentFixture<EcopointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcopointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcopointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
