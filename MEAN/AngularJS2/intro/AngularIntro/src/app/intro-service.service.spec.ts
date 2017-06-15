import { TestBed, inject } from '@angular/core/testing';

import { IntroServiceService } from './intro-service.service';

describe('IntroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroServiceService]
    });
  });

  it('should be created', inject([IntroServiceService], (service: IntroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
