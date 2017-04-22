import { TestBed, inject } from '@angular/core/testing';

import { EcopointsService } from './ecopoints.service';

describe('EcopointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcopointsService]
    });
  });

  it('should ...', inject([EcopointsService], (service: EcopointsService) => {
    expect(service).toBeTruthy();
  }));
});
