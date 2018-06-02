import { TestBed, inject } from '@angular/core/testing';

import { GithubrequestService } from './githubrequest.service';

describe('GithubrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubrequestService]
    });
  });

  it('should be created', inject([GithubrequestService], (service: GithubrequestService) => {
    expect(service).toBeTruthy();
  }));
});
