/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestmanagerService } from './testmanager.service';

describe('Service: Testmanager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestmanagerService]
    });
  });

  it('should ...', inject([TestmanagerService], (service: TestmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
