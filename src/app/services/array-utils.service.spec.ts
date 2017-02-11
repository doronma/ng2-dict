/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrayUtilsService } from './array-utils.service';

describe('ArrayUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayUtilsService]
    });
  });

  it('should ...', inject([ArrayUtilsService], (service: ArrayUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
