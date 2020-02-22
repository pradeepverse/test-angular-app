import { TestBed } from '@angular/core/testing';

import { MyAPIserviceService } from './my-apiservice.service';

describe('MyAPIserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAPIserviceService = TestBed.get(MyAPIserviceService);
    expect(service).toBeTruthy();
  });
});
